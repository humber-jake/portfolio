import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import resume from './resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='Projects' element={<Projects projects={resume.projects} isHomePage={false}/>}></Route>
        </Routes>
    </BrowserRouter>
);
