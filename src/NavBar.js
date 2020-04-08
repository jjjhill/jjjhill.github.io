import React from 'react';
import './NavBar.css'
import { Home, Person, Build, Email } from '@material-ui/icons';

export default function NavBar() {
    return (
      <div className="Nav">
      	<Home style={{ color: 'white', fontSize: '36px' }} />
      	<Person style={{ color: 'white', fontSize: '36px' }} />
      	<Build style={{ color: 'white', fontSize: '36px' }} />
      	<Email style={{ color: 'white', fontSize: '36px' }} />
      </div>
    )
}
