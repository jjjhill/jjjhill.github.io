import React from 'react'
import './Home.css'
import linkedInLogo from '../images/linked-in-white.png'
import githubLogo from '../images/github-white.png'

function Home() {
  return (
    <div className="Home">
      <div className="content">
        <div id="JoshHill">
          <div className="Letter"><span>J</span></div>
          <div className="Letter"><span>O</span></div>
          <div className="Letter"><span>S</span></div>
          <div className="Letter"><span>H</span></div>
          <div className="Letter"><span>I</span></div>
          <div className="Letter"><span>L</span></div>
          <div className="Letter"><span>L</span></div>
          <div className="Letter"><span>L</span></div>
          <div className="Letter"><span>I</span></div>
          <div className="Letter"><span>H</span></div>
          <div className="Letter"><span>S</span></div>
          <div className="Letter"><span>O</span></div>
        </div>
        <div id="socials">
          <a href="https://www.linkedin.com/in/josh-hill1/" target="_blank">
            <img src={linkedInLogo} alt={'linkedIn profile'}/>
          </a>
          <a href="https://github.com/jjjhill" target="_blank">
            <img src={githubLogo} alt={'github portfolio'}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
