import "./AboutMe.scss";
import "./Skills";

export default function AboutMe(props) {
  //TODO: put in links to the general assembly course & also to the reach out portion of the page.
  return (
    <div className="section" id="aboutMe">
      <div className="container">
        <h1 className="title">About Me</h1>
        <section>
          I'm a Sydney based software engineer currently working at Qwilr. With
          a background in Mechanical Engineering & Economics, I developed a love
          for problem solving and systematic thinking. I came to realise that
          these interests were a strong match for the software industry. So in
          early 2021 I decided to pivot my career.
        </section>
        <section>
          After the first few months of self study, I looked to accelerate my
          path into industry by I attending the 12 week General Assembly
          Software Engineering Immersive. After the completion of which, I was
          offered a role as an Instructional Associate by the bootcamp
          administrators. In this role, I assisted other students as they
          learned to code. After this I began work at Qwilr, where I operate in
          team Bolt where we work on integrations & scalability. In this role, I
          have gained experience with our AWS architecture, design patterns, and
          other aspects of our MERN tech stack.
        </section>
      </div>
    </div>
  );
}
