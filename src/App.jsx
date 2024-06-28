import './App.css';
import resume from './assets/resume';
import portfolioPicture from './assets/portfolio2.png';
import Technology from './Technology';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Navbar from './Navbar';
import SocialMediaBookmarks from './SocialMediaBookmarks';

function App() {
  return (
    <>
      <div className="BackgroundAnimation"></div>
      <SocialMediaBookmarks socials={resume.socialmedia} />
      <Navbar resume={resume} />
      <div className="wrapper">
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
      <div className="body">
        <div className="container">
          <Education education={resume.education} />
        </div>
        <div className="divider"></div>
        <div className="container">
          <Projects projects={resume.projects} isHomePage={true} />
        </div>
        <div className="divider"></div>
        <div className="container">
          <Experience experience={resume.experience} isHomePage={true} />
        </div>
      </div>
    </>
  );
}

export default App;
