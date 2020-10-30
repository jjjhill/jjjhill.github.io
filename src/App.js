import React, { useState } from 'react';
import './App.css'
import NavBar from './NavBar.js'
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Contact from './Contact.js'
import useComponentVisible from './useComponentVisible.js'
import checkmark from '../images/check.png'

function App() {
  const routes = ['home', 'about', 'skills', 'contact']
  const [formSuccess, setFormSuccess] = useState(false)
  const [page, setPage] = useState('home')
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const pageSelect = (pageName) => {
    if (pageName === 'contact') {
      setIsComponentVisible(true)
      return
    }
    setPage(pageName)
  }

  const formSubmitted = () => {
    setFormSuccess(true)
    setTimeout(() => {
      setIsComponentVisible(false)
      setFormSuccess(false)
    }, 750)
  }

  return (
    <div>
      <NavBar onSelect={pageSelect} selectedPage={page} routes={routes} />
      <div id="App" className={page === 'about' ? 'darken' : ''}>
        { page === 'home' && <Home /> }
        { page === 'about' && <About /> }
        { page === 'skills' && <Skills /> }
        { isComponentVisible &&
          <Contact
            ref={ref}
            formSubmitted={formSubmitted}
          />
        }
        <img src={checkmark} id='checkmark' className={formSuccess ? 'onSuccess' : ''} />
        <div id="info">i</div>
      </div>
    </div>
  )
}

export default App
