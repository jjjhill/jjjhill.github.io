import React, { useState } from 'react';
import './NavBar.css'
import { Home, Person, Build, Email } from '@material-ui/icons';

export default function NavBar(props) {
  let [hoveredId, setHoveredId] = useState(-1)
  let routes = ['home', 'about', 'skills', 'contact']
  let primaryColor = '#08fdd8'

  let navigateTo = (routeIndex) => {
    if (routeIndex === 3) {
      // contact
      props.onOpenContact()
      return
    }
    props.onSelect(routes[routeIndex])
  }

    return (
      <div className="Nav" onMouseLeave={() => setHoveredId(-1)}>
        <div onMouseEnter={() => setHoveredId(0)} onClick={() => navigateTo(0)}>
          <Home style={{ color: hoveredId === 0 ? primaryColor : 'white', fontSize: '36px' }} />
        </div>
        <div onMouseEnter={() => setHoveredId(1)} onClick={() => navigateTo(1)}>
          <Person style={{ color: hoveredId === 1 ? primaryColor : 'white', fontSize: '36px' }} />
        </div>
        <div onMouseEnter={() => setHoveredId(2)} onClick={() => navigateTo(2)}>
          <Build style={{ color: hoveredId === 2 ? primaryColor : 'white', fontSize: '36px' }} />
        </div>
        <div onMouseEnter={() => setHoveredId(3)} onClick={() => navigateTo(3)}>
          <Email style={{ color: hoveredId === 3 ? primaryColor : 'white', fontSize: '36px' }} />
        </div>
      </div>
    )
}
