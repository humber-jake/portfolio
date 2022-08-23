import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Education from './Education';
import resume from './resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='Projects' element={<Projects projects={resume.projects} isHomePage={false}/>}></Route>
          <Route path='Education' element={<Education content={resume.education} isHomePage={false}/>}></Route>
          <Route path='*' element={<App />}></Route>
        </Routes>
    </BrowserRouter>
);
