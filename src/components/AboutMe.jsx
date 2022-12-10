import "./AboutMe.scss";
import "./Skills";

export default function AboutMe(props) {
  //TODO: put in links to the general assembly course & also to the reach out portion of the page.
  return (
    <div className="section" id="aboutMe">
      <div className="container">
        <h1 className="title">About Me</h1>
        <section>
          I'm a Sydney based software developer, with a background in mechanical
          engineering, marketing, finance and customer service. In the process
          of pivoting my career trajectory I completed General Assembly's
          Software Engineering Immersive.
        </section>
        <section>
          From my time in leadership & financial modeling within the UTS
          Motorsports Electric team and a small startup, I found a love for
          abstract problem solving, communicating ideas vertically and
          horizontally to stakeholders. This ultimately led me to study software
          engineering in my spare time and then to the General Assembly Software
          Engineering Immersive where I have been deepening my understanding of
          computation and web development. I am immensely motivated not only by
          the beauty of the craft but also my personal mission to move humanity
          forward.
        </section>
      </div>
    </div>
  );
}
