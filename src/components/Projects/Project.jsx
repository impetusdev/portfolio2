import "./Project.scss";

export default function Project({ title, imgSrc, description, demo, repo }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imgSrc} alt="yo" loading="lazy" />
      <section>{description}</section>
      <div className="links">
        <a className="external-link" href={demo}>
          DEMO
        </a>
        <a className="external-link" href={repo}>
          REPO
        </a>
      </div>
    </div>
  );
}
