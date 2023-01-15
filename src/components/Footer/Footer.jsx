import "./Footer.scss";
import resume from "./Laurence_Qi_Software_Engineer.pdf";

export function Footer() {
  return (
    <div className="footer" id="footer">
      <h3>Connect With Me</h3>

      <div className="links">
        <a
          className="external-link"
          href="https://github.com/impetusdev"
          target="_blank"
          rel="noreferrer"
        >
          <img src="reachout/Github.svg" alt="github" />
        </a>
        <a
          className="external-link"
          href="https://www.linkedin.com/in/laurenceqi"
          target="_blank"
          rel="noreferrer"
        >
          <img src="reachout/LinkedIn.svg" alt="LinkedIn" />
        </a>
        <a
          className="external-link"
          href="https://twitter.com/life_is_a_model"
          target="_blank"
          rel="noreferrer"
        >
          <img src="reachout/Twitter.svg" alt="Twitter" />
        </a>
        <a
          className="external-link"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          <img src="reachout/Resume.svg" alt="Resume" />
        </a>
      </div>
    </div>
  );
}
