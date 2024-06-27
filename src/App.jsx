import './App.css';
import resume from './assets/resume';
import portfolioPicture from './assets/portfolio2.png';
import Technology from './Technology';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Navbar from './Navbar';
import BackgroundDoodles from './BackgroundDoodles';

function App() {
  return (
    <>
      <div className="BackgroundAnimation"></div>
      <Navbar resume={resume} />
      <div className="wrapper">
        <BackgroundDoodles />
        <div className="Hero">
          <div className="profile">
            <div className="HeroText">
              <div className="greeting">{resume.greeting}</div>
              <div className="byline">{resume.byline}</div>
            </div>
            <img src={portfolioPicture} className="headshot" alt="" />
          </div>
          <Technology content={resume.technology} />
        </div>
      </div>
      <div className="wrapperbody">
        <div className="body">
          <Education education={resume.education} />
          <Projects projects={resume.projects} />
          <Experience experience={resume.experience} />
        </div>
      </div>
    </>
  );
}

export default App;
