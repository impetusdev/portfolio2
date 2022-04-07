import Banner from './components/Banner';
import Nav from './components/Nav';
import Section from './components/Section';
import Projects from './components/Projects';
import './App.css';

//TODO: put in a profile
// TODO:

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Section></Section>
      <Projects></Projects>
      <Nav></Nav>
    </div>
  );
}

export default App;
