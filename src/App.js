import './App.css';
import photo from './portfolio-circle.png'
import Navbar from './Navbar.js'
import resume from './resume';
import Education from './Education.js';
import Technology from './Technology.js'
import Projects from './Projects';
import Footer from './Footer';

function App() {

  let body ='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus dolorum eligendi ipsa rem autem, omnis sapiente totam ex fugit? Repellat delectus deserunt veritatis eius iure excepturi quaerat, deleniti eos perspiciatis blanditiis. Similique officiis ab libero dolor iure, quisquam ut officia.'


  return (
    <div className="App">
      <Navbar/>
      <div className='header'>
        <div className='titleContainer'>
          <div className='firstname'>Jacob</div>
          <div className='lastname'>Humber</div>
          <div className='byline'>{resume.byline}</div>
        </div>
        <img className='photo' src={photo}/>
      </div>
      <div className='design'></div>
      <div className="body">

        <Technology content={resume.technology} />
        <Projects projects={resume.projects} isHomePage={true}/>
        <Education content={resume.education} isHomePage={true}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
