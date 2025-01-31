import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProfilePage'
import ProfilePage from './pages/ProjectPage'
import About from './pages/About'
import Comments from './components/Comment'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
          <div className="routes"> 
        <Navbar  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profiles" element={<ProjectPage />} />
          <Route path="/projects" element={<ProfilePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </div>
    </Router>
      
  )
}

export default App
