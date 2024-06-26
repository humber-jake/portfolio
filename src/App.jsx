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
      <Navbar resume={resume} />
      <div className="wrapper">
        <div className="profile">
          <img
            src={portfolioPicture}
            className="headshot"
            width={'300px'}
            alt=""
          />
          <div className="profileText">
            <p className="byline">{resume.byline}</p>
            <Technology className="Technology" content={resume.technology} />
          </div>
        </div>
        <div className="body">
          <Education className="Education" education={resume.education} />
          <Projects className="Projects" projects={resume.projects} />
          <Experience className="Experience" experience={resume.experience} />
        </div>
      </div>
    </>
  );
}

export default App;
