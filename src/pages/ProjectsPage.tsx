
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../sections/CTA';
import ProjectsHero from '../sections/ProjectsHero';
import ProjectTabs from '../sections/ProjectTabs';
import Vision2030Section from '../sections/Vision2030Section';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0d1623] selection:bg-[#3898ec]/30 selection:text-white">
      <Navbar isInternal />
      
      <main>
        <ProjectsHero />
        
        {/* Dynamic Section Separator */}
        <div className="relative z-10 -mt-16 h-32 bg-gradient-to-t from-[#0d1623] to-transparent pointer-events-none" />
        
        <div id="explore-projects">
          <ProjectTabs />
        </div>
        
        <Vision2030Section />
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
