import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NavigationHub from './components/NavigationHub';
import FeaturedResearch from './components/FeaturedResearch';
import ExpertiseSection from './components/ExpertiseSection';
import Workflow from './components/Workflow';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import DocumentationLab from './components/DocumentationLab';
import TechnicalContent from './components/TechnicalContent';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans selection:bg-teal-500 selection:text-white">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <NavigationHub />
        <FeaturedResearch />
        <ExpertiseSection />
        <Workflow />
        <Projects />
        <TechnicalSkills />
        <DocumentationLab />
        <TechnicalContent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
