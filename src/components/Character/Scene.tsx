import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  const [, setChar] = useState<THREE.Object3D | null>(null);
  useEffect(() => {
    if (canvasDiv.current) {
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let lUpperArm: THREE.Object3D | null = null;
      let rUpperArm: THREE.Object3D | null = null;
      const L_ARM_BASE = -1.3;
      const R_ARM_BASE = 1.3;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;
      let loadedCharacter: THREE.Object3D | null = null;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      loadCharacter((pct) => setLoading(pct)).then((gltf) => {
        if (disposed) return;
        if (gltf) {
          const animations = setAnimations(gltf);
          hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
          mixer = animations.mixer;
          loadedCharacter = gltf.scene;
          setChar(loadedCharacter);
          scene.add(loadedCharacter);

          // T-pose → arms-down. Idle clip's arm tracks are stripped in
          // animationUtils; procedural sway is added in the animate loop.
          lUpperArm = loadedCharacter.getObjectByName("J_Bip_L_UpperArm") ?? null;
          rUpperArm = loadedCharacter.getObjectByName("J_Bip_R_UpperArm") ?? null;
          if (lUpperArm) lUpperArm.rotation.z = L_ARM_BASE;
          if (rUpperArm) rUpperArm.rotation.z = R_ARM_BASE;

          headBone =
            loadedCharacter.getObjectByName("spine006") ||
            loadedCharacter.getObjectByName("mixamorig:Head") ||
            loadedCharacter.getObjectByName("J_Bip_C_Head") ||
            loadedCharacter.getObjectByName("Head") ||
            null;
          screenLight = loadedCharacter.getObjectByName("screenlight") || null;
          // 2500ms covers the Loading overlay's dismiss animation
          // (600ms + 1000ms + 900ms in Loading.tsx) before lights/intro fire.
          setTimeout(() => {
            if (disposed) return;
            light.turnOnLights();
            animations.startIntro();
          }, 2500);
        }
      });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      let debounce: number | undefined;
      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        debounce = setTimeout(() => {
          element?.addEventListener("touchmove", (e: TouchEvent) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }))
          );
        }, 200);
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", onMouseMove);
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEnd);
      }
      let rafId = 0;
      let disposed = false;
      const animate = () => {
        if (disposed) return;
        rafId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        const t = clock.elapsedTime;
        if (lUpperArm) lUpperArm.rotation.z = L_ARM_BASE + Math.sin(t * 0.9) * 0.04;
        if (rUpperArm) rUpperArm.rotation.z = R_ARM_BASE + Math.sin(t * 0.9 + Math.PI) * 0.04;
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        renderer.render(scene, camera);
      };
      animate();
      const onResize = () =>
        loadedCharacter &&
        handleResize(renderer, camera, canvasDiv, loadedCharacter);
      window.addEventListener("resize", onResize);
      return () => {
        disposed = true;
        cancelAnimationFrame(rafId);
        clearTimeout(debounce);
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", onResize);
        document.removeEventListener("mousemove", onMouseMove);
        if (canvasDiv.current && renderer.domElement.parentNode === canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        if (landingDiv) {
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
