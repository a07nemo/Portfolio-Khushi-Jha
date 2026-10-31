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
                <h4>Project Coordinator, AI &amp; 3D Imaging</h4>
                <h5>FlixStock</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Jul 2026 – Present. Lead the 3D shoe digitization project for
              Zalando end to end, from inbound through triage, scanning, delivery
              and outbound, scaling throughput 2.5x (~50 → ~125 shoes/day).
              Automated scannable vs non-scannable triage with Google Apps Script
              and Sheets, built a live operations dashboard for scanner partner
              DeepAR, and act as primary point of contact for both Zalando and
              DeepAR while owning QC, reshoots and rejections across the pipeline.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation &amp; Product Intern</h4>
                <h5>GroMo</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Jul 2025 – Jun 2026. Ran A/B experiments on the voice-agent funnel
              against a no-call control group, lifting activation from 6% to 19%,
              and debugged drop-off with SQL and event logs. Built real-time AI
              voice and IVR agents, an LLM query responder (n8n + GPT-4o + Zoho
              Desk) that cut first-level response time by 45%, and shipped KYC
              document verification (OpenAI Assistant API + Zoho Flow) to 24/7
              production. Wrote the PRD for an in-app welcome-call agent and built
              OTIS, an internal tracking tool, cutting manual effort by 20%.
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
              Coursework in Agile and Scrum project management, data structures
              and algorithms, computer networks and cybersecurity, with projects
              spanning cloud-based threat intelligence, ML-based DDoS detection
              (DAISY research), and medical image processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
