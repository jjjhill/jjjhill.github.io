import React, { useRef } from 'react'
import './Skills.css'
import Rotator from './Rotator'

import cssLogo from '../images/css3.png'
import htmlLogo from '../images/html5.png'
import jsLogo from '../images/js.png'
import reactLogo from '../images/react.png'
import vueLogo from '../images/vue.png'
import chromeLogo from '../images/chrome.png'

import nodeLogo from '../images/node.png'
import dockerLogo from '../images/docker.png'
import awsLogo from '../images/aws2.png'
import sqlLogo from '../images/sql.png'
import flaskLogo from '../images/flask.png'

function Skills() {
  let frontSkills = {
    'CSS': cssLogo,
    'HTML': htmlLogo,
    'JavaScript': jsLogo,
    'React': reactLogo,
    'Vue': vueLogo,
    'Dev Tools': chromeLogo
  }
  let backSkills = {
    'NodeJS': nodeLogo,
    'Docker': dockerLogo,
    'AWS': awsLogo,
    'SQL': sqlLogo,
    'Flask': flaskLogo,
  }

  // TODO - componentize the rotator container
  return (
    <div className="Skills">
      <h1>Frontend</h1>
      <Rotator skills={frontSkills} initialSpeed={-0.1} />
      <h1>Backend</h1>
      <Rotator skills={backSkills} initialSpeed={0.1} />
    </div>
  )
}

export default Skills
