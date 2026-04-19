import './App.css';
import Navbar from './components/Navbar';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
