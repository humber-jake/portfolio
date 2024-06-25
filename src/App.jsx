import './App.css';
import resume from './assets/resume';
import portfolioPicture from './assets/portfolio2.png';
import Technology from './Technology';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar name={resume.name} />
      <div className="Hero">
        <div className="HeroText">
          <p className="byline">{resume.byline}</p>

          <Technology className="Technology" content={resume.technology} />
        </div>
        <img src={portfolioPicture} className="portfolioPicture" alt="" />
      </div>
      <div className="body">
        <Education className="Education" education={resume.education} />
        <Projects className="Projects" projects={resume.projects} />
        <Experience className="Experience" experience={resume.experience} />
      </div>
    </>
  );
}

export default App;
