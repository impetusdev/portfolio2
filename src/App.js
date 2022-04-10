import Banner from './components/Banner';
import Nav from './components/Nav';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Nav></Nav>

      <Footer></Footer>
    </div>
  );
}

export default App;
