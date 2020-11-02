import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BoulderingForm.css"
import axios from 'axios'

function BoulderingForm() {
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState('');
  const submit = () => {
    var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phone.match(phoneRegex)) {
      alert('phone number not valid')
      return
    }
    axios.post("https://cors-anywhere.herokuapp.com/3.136.177.132:3000/webhooks/inbound-message", {date: date.toString(), phone})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // console.log(date, phone)
  }

  return (
    <div id="form">
      <div>
        <label>Date to watch: </label>
        <DatePicker selected={date} onChange={date => setDate(date)} />
      </div>
      <div>
        <label>Phone number: </label>
        <input id="phone" onChange={e => setPhone(e.target.value)}></input>
      </div>
      <button onClick={submit}>
        Submit
      </button>
    </div>
  )
}

export default BoulderingForm