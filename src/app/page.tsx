import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import SkillsAndTech from "./sections/SkillsAndTech";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Page() {
  return (
    <div className="font-[family-name:var(--inter-font)]">
      <div className="min-h-screen">
        <div className="px-32 lg:px-[20%] py-12">
          <Navigation />
        </div>
        <div id="home">
          <Home />
        </div>{" "}
      </div>
      <div id="skills" className="min-h-screen">
        <SkillsAndTech />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
