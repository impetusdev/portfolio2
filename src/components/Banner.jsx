import "./Banner.scss";
import { DownArrow } from "./DownArrow/DownArrow";

export default function Banner(props) {
  return (
    <div className="Banner">
      <img id="profile" src="profile.png" alt="Laurence Qi" />
      <div id="blur"></div>
      <h1 id="name">Laurence Qi</h1>
      <h2 id="sub-heading">Junior Software Engineer @ Qwilr</h2>
      <DownArrow />
    </div>
  );
}
