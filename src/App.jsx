import "./App.css";
import resume from "./assets/resume";
// import portfolioPicture from './assets/portfolio2.png';
// import Technology from './Technology';
// import Education from './Education';
// import Projects from './Projects';
import Experience from "./Experience";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Education from "./Education";
import Projects from "./Projects";

function App() {
  return (
    <>
      <Navbar resume={resume} />
      <div className="mobilewarning">
        <h2>Uh oh!</h2>
        The mobile version of this site is currently under construction and may
        not display correctly.
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/education"
          element={
            <Education education={resume.education} isHomePage={false} />
          }
        />
        <Route
          path="/experience"
          element={
            <Experience experience={resume.experience} isHomePage={false} />
          }
        />
        <Route
          path="/projects"
          element={<Projects projects={resume.projects} isHomePage={false} />}
        />
      </Routes>
      <Footer resume={resume} />
    </>
    // <>
    //   <div className="BackgroundAnimation"></div>
    //   <Navbar resume={resume} />
    //   <div className="wrapper">
    //     <div className="Hero">
    //       <div className="profile">
    //         <div className="HeroText">
    //           <div className="greeting">{resume.greeting}</div>
    //           <div className="byline">{resume.byline}</div>
    //         </div>
    //         <img src={portfolioPicture} className="headshot" alt="" />
    //       </div>
    //       <Technology content={resume.technology} />
    //     </div>
    //   </div>
    //   <div className="body">
    //     <div className="container">
    //       <Education education={resume.education} />
    //     </div>
    //     {/* <div className="divider"></div> */}
    //     <div className="container">
    //       <Projects projects={resume.projects} isHomePage={true} />
    //     </div>
    //     {/* <div className="divider"></div> */}
    //     <div className="container">
    //       <Experience experience={resume.experience} isHomePage={true} />
    //     </div>
    //   </div>
    //   <Footer resume={resume} />
    // </>
  );
}

export default App;
