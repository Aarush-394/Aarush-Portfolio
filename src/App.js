import Navbar from "./components/NavBar/Navbar.js";
import Intro from './components/Intro/Intro.js'
import Skills from "./components/Skills/Skills.js";
import Works from './components/Works/Work.js';
import About from './components/About/About.js';
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <Works/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
