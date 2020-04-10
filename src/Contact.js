import React from 'react'
import './Contact.css'

// ref for determining clicking out of modal
const Contact = React.forwardRef((props, ref) => (
    <div ref={ref} className="Contact">
      <span className="blurb">

      </span>
      <div className="inputs">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <input placeholder="Message" />
      </div>
    </div>
))

export default Contact
