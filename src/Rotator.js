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

  let updateSpeed = (e) => {
    let rect = e.target.getBoundingClientRect()
    let x = e.clientX - rect.left

    targetSpeed = (x-250)/250
  }

  let updateAngle = (e) => {
    let currX = e.clientX || e.changedTouches[0].clientX
    let dist = currX - initialX
    let incAngle = dist/2
    let newAng = initialAngle + incAngle
    angle = newAng
    rotator.current.style.transform = `rotate3d(0, 1, 0, ${angle}deg)`
  }

  let startTracking = () => {
    container.current.addEventListener('mousemove', updateSpeed)
  }

  let endTracking = () => {
    if (targetSpeed <= 0) {
      targetSpeed = -1*Math.abs(initialSpeed)
    }
    else {
      targetSpeed = Math.abs(initialSpeed)
    }
  }

  let startDragging = (e) => {
    initialX = e.clientX || e.changedTouches[0].clientX
    initialAngle = angle
    clearInterval(interval)
    container.current.removeEventListener('mousemove', updateSpeed)
    container.current.removeEventListener('touchmove', updateSpeed)
    document.addEventListener('mousemove', updateAngle)
    document.addEventListener('touchmove', updateAngle)
    dragSpeedCalculator = setInterval(() => {
      dragSpeed = (angle-prevDragAngle)/20
      prevDragAngle = angle
    }, 20)
    document.addEventListener('mouseup', endDragging)
    document.addEventListener('touchend', endDragging)
  }

  let endDragging = () => {
    speed = dragSpeed
    targetSpeed = dragSpeed
    clearInterval(dragSpeedCalculator)
    interval = setInterval(rotateAuto, 1)
    container.current.addEventListener('mousemove', updateSpeed)
    container.current.addEventListener('touchmove', updateSpeed)
    document.removeEventListener('mousemove', updateAngle)
    document.removeEventListener('touchmove', updateAngle)
    document.removeEventListener('mouseup', endDragging)
    document.removeEventListener('touchend', endDragging)
    endTracking()
  }

  let rotateAuto = () => {
    if (targetSpeed > speed) {
      speed += acceleration
    }
    else if (targetSpeed < speed) {
      speed -= acceleration
    }

    let newAng = angle + speed
    if (newAng < 0) newAng = 360
    if (newAng > 360) newAng = 0
    angle = newAng
    rotator.current.style.transform = `rotate3d(0, 1, 0, ${angle}deg)`
  }

  useEffect(() => {
    interval = setInterval(rotateAuto, 1)

    container.current.addEventListener('mouseenter', startTracking)
    container.current.addEventListener('mouseleave', endTracking)
    container.current.addEventListener('mousedown', startDragging)
    container.current.addEventListener('touchstart', startDragging)

    return () => {
      container.current.removeEventListener('mouseenter', startTracking)
      container.current.removeEventListener('mouseleave', endTracking)
      container.current.removeEventListener('mousemove', updateSpeed)
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
      ref={container}
      onMouseEnter={startTracking}
      onMouseLeave={endTracking}>
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
