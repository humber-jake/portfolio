import './App.css';
import resume from './assets/resume';
import portfolioPicture from './assets/portfolio2.png';
import Technology from './Technology';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Navbar from './Navbar';
import Divider from './Divider';

function App() {
  return (
    <>
      <Navbar resume={resume} />
      <div className="wrapper">
        <div className="Hero">
          <div className="HeroText">
            <div className="profile">
              <div className="greeting">{resume.greeting}</div>
              <div className="byline">{resume.byline}</div>
            </div>
            <Technology content={resume.technology} />
          </div>
          <img src={portfolioPicture} className="headshot" alt="" />
        </div>
      </div>
      <Divider />
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
