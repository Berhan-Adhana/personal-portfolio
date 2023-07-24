import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* About */}
      <About />
      {/* Skills */}
      <Skills />
      {/* Services */}
      {/* Jobs */}
      <Projects />
      {/* Contact me */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
