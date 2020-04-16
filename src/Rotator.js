import React, { useRef } from 'react'
import './Rotator.css'

function Rotator(props) {
  const rotator = useRef(null)
  const container = useRef(null)
  let { skills, initialSpeed } = props
  let skillNames = Object.keys(skills)
  let inc = Math.floor(360/skillNames.length)

  let targetSpeed = initialSpeed
  let speed = 0
  let acceleration = 0.003
  let angle = 0

  setInterval(() => {
    if (targetSpeed > speed) {
      speed+=acceleration
    }
    else if (targetSpeed < speed) {
      speed-=acceleration
    }

    let newAng = angle + speed
    if (newAng < 0) newAng = 360
    if (newAng > 360) newAng = 0
    angle = newAng
    rotator.current.style.transform = `rotate3d(0, 1, 0, ${angle}deg)`
  }, 1)

  let mouseMoveEvent = (e) => {
    var rect = e.target.getBoundingClientRect()
    var x = e.clientX - rect.left

    targetSpeed = (x-250)/250
  }

  let startTracking = () => {
    container.current.addEventListener('mousemove', mouseMoveEvent)
  }

  let endTracking = () => {
    container.current.removeEventListener('mousemove', mouseMoveEvent)
    if (targetSpeed <= 0) {
      targetSpeed = -0.1
    }
    else {
      targetSpeed = 0.1
    }
  }

  return (
    <div id="container" ref={container} onMouseEnter={startTracking} onMouseLeave={endTracking}>
      <div id="rotator" ref={rotator}>
        {skillNames.map((skill, i) => (
          <div
            key={skill}
            style={{ transform: `translateZ(300px) rotate3d(0, 1, 0, ${inc*i}deg)` }}>
              <img src={skills[skill]} alt={skill}/>
              {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rotator
