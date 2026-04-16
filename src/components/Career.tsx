import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation Enabler Intern</h4>
                <h5>GroMo</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and deploying AI-powered workflows across marketing and
              user-engagement — reducing manual intervention by 20% and accelerating
              campaign execution. Built AI voice agents for outbound calls (10%
              higher engagement), a GP Query Auto-Responder on n8n integrating Zoho
              Desk with GPT-4o, and an AI document verification pipeline using
              OpenAI's Assistant API and Zoho Flow for round-the-clock L1 audit of
              partner claim documents (Kotak 811, Upstox Demat, Tide).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Coordinator</h4>
                <h5>Ingenuity '25 — NIIT University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led end-to-end marketing strategy for the university's premier
              cultural fest — owning execution from planning to launch. Ran
              multi-channel outreach across digital and offline channels to build
              brand visibility and drive participation, and collaborated across
              teams on sponsorship acquisition, promotions, and on-ground logistics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning & Teaching Assistant</h4>
                <h5>Research Desk COEET, NIIT University</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Nov 2022 – Jul 2023 and Aug 2024 – Nov 2024. Formed and led skill-based
              research teams, driving a 15% improvement in project success rates
              through structured planning and stakeholder alignment. Mentored 30+
              peers on analytical thinking, communication, and problem-solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science</h4>
                <h5>NIIT University</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Expected graduation August 2026. Coursework and projects spanning
              cloud-based threat intelligence, SDN-based load balancing under DDoS
              attacks (DAISY research), and digital image processing in medical
              imaging with AI-based segmentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
