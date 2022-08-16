import './App.css';
import photo from './portfolio-circle.png'
import Section from './Section.js';

function App() {

  let body ='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus dolorum eligendi ipsa rem autem, omnis sapiente totam ex fugit? Repellat delectus deserunt veritatis eius iure excepturi quaerat, deleniti eos perspiciatis blanditiis. Similique officiis ab libero dolor iure, quisquam ut officia.'

  return (
    <div className="App">
      <div className='container'>
        <div className='titleContainer'>
          <div className='name'>Jacob Humber</div>
          <div className='byline'>Please hire me so I can say I'm a web developer.</div>
        </div>
        <img className='photo' src={photo}/>
      </div>
        <Section title='Projects' body={body}/> 
        <Section title='Experience' body={body}/>
    </div>
  );
}

export default App;
