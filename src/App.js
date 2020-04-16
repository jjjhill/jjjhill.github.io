import React, { useState } from 'react';
import './App.css'
import NavBar from './NavBar.js'
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Contact from './Contact.js'
import useComponentVisible from './useComponentVisible.js'

function App() {
  const [page, setPage] = useState('skills')
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  let pageSelect = (pageName) => {
    if (pageName === 'contact') {
      setIsComponentVisible(!isComponentVisible)
      return
    }
    setPage(pageName)
  }

  return (
    <div>
      <NavBar onSelect={pageSelect} selectedPage={page} />
      <div className="App">
        { page === 'home' && <Home /> }
        { page === 'about' && <About /> }
        { page === 'skills' && <Skills /> }
        { isComponentVisible && <Contact ref={ref}/> }
      </div>
    </div>
  )
}

export default App
