import React, { useState } from 'react';
import './App.css'
import NavBar from './NavBar.js'
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Contact from './Contact.js'

function App() {
  const [page, setPage] = useState('home')
  const [showContactDialog, setShowContactDialog] = useState(false)
  return (
    <div className="App">
      <div className="background" />
      <NavBar onSelect={(pageName) => setPage(pageName)} onOpenContact={() => setShowContactDialog(true)}/>
      { page === 'home' && <Home /> }
      { page === 'about' && <About /> }
      { page === 'skills' && <Skills /> }
      { showContactDialog && <Contact /> }
    </div>
  )
}

export default App
