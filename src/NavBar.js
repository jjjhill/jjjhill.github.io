import React, { useState } from 'react';
import './NavBar.css'
import { Home, Person, Build, Email } from '@material-ui/icons';

export default function NavBar(props) {
  let [hoveredId, setHoveredId] = useState(-1)
  let { routes } = props
  let primaryColor = '#08fdd8'

  let navigateTo = (routeIndex) => {
    props.onSelect(routes[routeIndex])
  }

    return (
      <div className="Nav" onMouseLeave={() => setHoveredId(-1)}>
        <div className="HomeIcon Icon" onMouseEnter={() => setHoveredId(0)} onClick={() => navigateTo(0)}>
          <Home style={{ color: hoveredId === 0 || props.selectedPage === routes[0] ? primaryColor : 'white', fontSize: '36px' }} />
        </div>
        <div className="AboutIcon Icon" onMouseEnter={() => setHoveredId(1)} onClick={() => navigateTo(1)}>
          <Person style={{ color: hoveredId === 1 || props.selectedPage === routes[1] ? primaryColor : 'white', fontSize: '36px' }} />
        </div>
        <div className="SkillsIcon Icon" onMouseEnter={() => setHoveredId(2)} onClick={() => navigateTo(2)}>
          <Build style={{ color: hoveredId === 2 || props.selectedPage === routes[2] ? primaryColor : 'white', fontSize: '36px' }} />
        </div>
        <div className="ContactIcon Icon" onMouseEnter={() => setHoveredId(3)} onClick={() => navigateTo(3)}>
          <Email style={{ color: hoveredId === 3 || props.selectedPage === routes[3] ? primaryColor : 'white', fontSize: '36px' }} />
        </div>
      </div>
    )
}
