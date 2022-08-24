import './App.css';
import photo from './portfolio-circle.png'
import Navbar from './Navbar.js'
import resume from './resume';
import Education from './Education.js';
import Technology from './Technology.js'
import Projects from './Projects';
import Footer from './Footer';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='header'>
        <div className='titleContainer'>
          <div className='firstname'>Jacob</div>
          <div className='lastname'>Humber</div>
          <div className='byline'>{resume.byline}</div>
          <div className='bgcontainer'>
            <div className="bgelementborder"/>
            <div className='bgelement'/>
          </div>
        </div>
        <img className='photo' src={photo} alt=''/>
      </div>
      <div className="body">

        <Technology content={resume.technology} />
        <Projects projects={resume.projects} isHomePage={true}/>
        <Experience experience={resume.experience} isHomePage={true}/>
        <Education education={resume.education} isHomePage={true}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
