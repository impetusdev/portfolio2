import { Banner } from "./components/Banner/Banner";
import { Nav } from "./components/Nav/Nav";
import { Skills } from "./components/Skills/Skills";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import "./App.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Nav></Nav>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>

      <Footer></Footer>
    </div>
  );
}

export default App;
