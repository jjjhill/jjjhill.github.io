import React from 'react'
import './Contact.css'

// ref for determining clicking out of modal
const Contact = React.forwardRef((props, ref) => {
  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        if (props.formSubmitted) props.formSubmitted()
      } else {
        alert('Possible network error')
      }
    };
    xhr.send(data);
  }

  return (
    <div ref={ref} className="Contact">
      <h1 id="contact-me">
        Contact Me
      </h1>
      <span id="my-email">1998.josh.hill@gmail.com</span>
      <p id="blurb">
        I'm looking for a full-time position in the Bay Area. My goal is to work with a team that enables me to enhance my skills and have real impact on interesting projects.
      </p>
      <form 
        onSubmit={submitForm}
        action="https://formspree.io/xoqkdwgb"
        method="POST"
      >
        <div className="inputs">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message" required />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
})

export default Contact
