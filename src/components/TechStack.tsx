import {
  SiOpenai,
  SiAnthropic,
  SiLangchain,
  SiN8N,
  SiZapier,
  SiZoho,
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGooglecloud,
  SiHubspot,
  SiPostman,
  SiSplunk,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Tool = { name: string; Icon: IconType; color: string };
type Category = { title: string; tools: Tool[] };

const categories: Category[] = [
  {
    title: "AI & Automation",
    tools: [
      { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
      { name: "Claude", Icon: SiAnthropic, color: "#C15F3C" },
      { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
      { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
      { name: "Zapier", Icon: SiZapier, color: "#FF4F00" },
      { name: "Zoho Flow", Icon: SiZoho, color: "#E42527" },
    ],
  },
  {
    title: "Engineering",
    tools: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
  {
    title: "Tools & Marketing",
    tools: [
      { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Splunk", Icon: SiSplunk, color: "#000000" },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <h2>My Tech Stack</h2>
      <div className="techstack-grid">
        {categories.map((cat) => (
          <div className="techstack-category" key={cat.title}>
            <h3 className="techstack-category-title">{cat.title}</h3>
            <ul className="techstack-tools">
              {cat.tools.map(({ name, Icon, color }) => (
                <li
                  className="techstack-tool"
                  key={name}
                  style={{ "--brand": color } as React.CSSProperties}
                >
                  <span className="techstack-tool-icon">
                    <Icon />
                  </span>
                  <span className="techstack-tool-name">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
