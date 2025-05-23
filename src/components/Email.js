import { useRef } from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import "../css/component/Email.scss";

export const Email = () => {
  const form = useRef();



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [projectType, setProjectType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    setName(''); // Clear the input field
    setEmail(''); // Clear the input field
    setAddress(''); // Clear the input field
    setBudget(''); // Clear the input field
    setProjectType(''); // Clear the input field
    setTimeline('');
    setMessage('');
  };

  const handleChange = (event) => {
    let val = event.target.value;
    switch (event.target.placeholder) {
      case "Name":
        setName(val);
        break;
      case "Email":
        setEmail(val);
        break;
      case "Address":
        setAddress(val);
        break;
      case "Budget":
        setBudget(val);
        break;
      case "Project Type":
        setProjectType(val);
        break;
      case "Timeline":
        setTimeline(val);
        break;
      case "Message":
        setMessage(val);
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6uh3fe4', 'template_tajh8y9', form.current, {
        publicKey: 'qHJ7c_k_wHK_LtEMU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    handleSubmit();

  };
  return (

    <form id="form" ref={form} onSubmit={sendEmail} >
      <input className="form_input"
        placeholder='Name'
        type="text"
        value={name}
        onChange={handleChange}
        name="from_name" required />
      <br />
      <br />
      <input
        className="form_input"
        type="email"
        name="from_email"
        value={email}
        onChange={handleChange}
        placeholder='Email'
        required />
      <br />
      <br />
      <input
        className="form_input"
        type="text"
        name="address"
        value={address}
        onChange={handleChange}
        placeholder='Address'
        required />
      <br />
      <br />
      <input
        className="form_input"
        placeholder='Project Type'
        value={projectType}
        onChange={handleChange}
        name="project_type" />
      <br />
      <br />
      <input
        className="form_input"
        type="text"
        name="time_line"
        value={timeline}
        onChange={handleChange}
        placeholder="Timeline"
        required />
      <br />
      <br />
      <input
        className="form_input"
        type="text"
        name="budget"
        value={budget}
        onChange={handleChange}
        placeholder='Budget' />
      <br />
      <br />

      <textarea
        id="data"
        name="message"
        value={message}
        onChange={handleChange}
        placeholder='Message' required />
      <br />
      <br />
      <input className="form_input" type="submit" value="Send" />
    </form >
  );
};

export default Email;