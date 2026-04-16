import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:khushijha229@gmail.com"
                data-cursor="disable"
              >
                khushijha229@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+917669003987"
                data-cursor="disable"
              >
                +91 76690 03987
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science, NIIT University — Expected Aug 2026
            </p>
            <p>
              Blue Bells Model School — Graduated 2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Highlights</h4>
            <a
              href="#about"
              data-cursor="disable"
              className="contact-social"
            >
              AI Automation Intern · GroMo <MdArrowOutward />
            </a>
            <a
              href="#about"
              data-cursor="disable"
              className="contact-social"
            >
              Marketing Coordinator · Ingenuity '25 <MdArrowOutward />
            </a>
            <a
              href="#about"
              data-cursor="disable"
              className="contact-social"
            >
              Teaching Assistant · COEET NIIT <MdArrowOutward />
            </a>
            <a
              href="#about"
              data-cursor="disable"
              className="contact-social"
            >
              Trained Classical & Contemporary Dancer <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio of <br /> <span>Khushi Jha</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
