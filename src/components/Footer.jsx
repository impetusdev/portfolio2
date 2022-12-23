import "./Footer.scss";

export default function Footer(props) {
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
          href="https://www.linkedin.com/in/laurence-qi-a4944513b/"
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
      </div>
    </div>
  );
}
