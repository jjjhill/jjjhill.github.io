import React, { useEffect, useRef } from 'react'
import useWindowDimensions from './useWindowDimensions'
import './Rotator.css'

function Rotator(props) {
  const rotator = useRef(null)
  const container = useRef(null)
  const { width } = useWindowDimensions();
  let { skills, initialSpeed } = props
  let skillNames = Object.keys(skills)
  let inc = Math.floor(360/skillNames.length)

  let targetSpeed = initialSpeed
  let speed = 0
  let acceleration = 0.003
  let angle = 0
  let interval = null
  let initialX = null
  let initialAngle = null
  let dragSpeedCalculator = null
  let dragSpeed = 0
  let prevDragAngle = 0

  let rotateAuto = () => {
    if (targetSpeed > speed) {
      speed += acceleration
    }
    else if (targetSpeed < speed) {
      speed -= acceleration
    }
    let newAng = angle + speed
    angle = newAng
    rotator.current.style.transform = `rotate3d(0, 1, 0, ${angle}deg)`
  }

  let updateAngle = (e) => {
    let currX = e.clientX || e.changedTouches[0].clientX
    let dist = currX - initialX
    let incAngle = dist/2
    let newAng = initialAngle + incAngle
    angle = newAng
    rotator.current.style.transform = `rotate3d(0, 1, 0, ${angle}deg)`
  }

  let endDragging = () => {
    speed = dragSpeed
    targetSpeed = dragSpeed
    clearInterval(dragSpeedCalculator)
    interval = setInterval(rotateAuto, 1)
    document.removeEventListener('mousemove', updateAngle)
    document.removeEventListener('touchmove', updateAngle)
    document.removeEventListener('mouseup', endDragging)
    document.removeEventListener('touchend', endDragging)
    
    if (targetSpeed < 0) {
      targetSpeed = -1*Math.abs(initialSpeed)
    }
    else if (targetSpeed > 0) {
      targetSpeed = Math.abs(initialSpeed)
    }
    else {
      targetSpeed = initialSpeed
    }
  }

  let startDragging = (e) => {
    initialX = e.clientX || e.changedTouches[0].clientX
    initialAngle = angle
    clearInterval(interval)
    document.addEventListener('mousemove', updateAngle)
    document.addEventListener('touchmove', updateAngle)
    dragSpeedCalculator = setInterval(() => {
      dragSpeed = (angle-prevDragAngle)/20
      prevDragAngle = angle
    }, 20)
    document.addEventListener('mouseup', endDragging)
    document.addEventListener('touchend', endDragging)
  }

  useEffect(() => {
    interval = setInterval(rotateAuto, 1)

    container.current.addEventListener('mousedown', startDragging)
    container.current.addEventListener('touchstart', startDragging)

    return () => {
      document.removeEventListener('mousemove', updateAngle)
      container.current.removeEventListener('mousedown', startDragging)
      container.current.removeEventListener('touchstart', startDragging)
      clearInterval(interval)
    }
  }, [])

  let radius = width < 770 ? 220 : 300
  return (
    <div
      id="container"
      ref={container}>
        <div id="rotator" ref={rotator}>
          {skillNames.map((skill, i) => (
            <div
              key={skill}
              style={{ transform: `translateZ(${radius}px) rotate3d(0, 1, 0, ${inc*i}deg)` }}>
                <img src={skills[skill]} alt={skill}/>
                {skill}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Rotator
