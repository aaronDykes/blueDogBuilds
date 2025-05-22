import { useRef } from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import "../css/component/Email.scss";

export const Email = () => {
  const form = useRef();

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
  };


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [projectType, setProjectType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(''); // Clear the input field
    setEmail(''); // Clear the input field
    setAddress(''); // Clear the input field
    setBudget(''); // Clear the input field
    setProjectType(''); // Clear the input field
    setTimeline('');
    setMessage('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleProjectChange = (event) => {
    setProjectType(event.target.value);
  };
  const handleTimelineChange = (event) => {
    setTimeline(event.target.value);
  };
  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (

    <form id="form" ref={form} onSubmit={sendEmail && handleSubmit} >
      <input className="form_input"
        placeholder='Name'
        type="text"
        value={name}
        onChange={handleNameChange}
        name="from_name" required />
      <br />
      <br />
      <input
        className="form_input"
        type="email"
        name="from_email"
        value={email}
        onChange={handleEmailChange}
        placeholder='Email'
        required />
      <br />
      <br />
      <input
        className="form_input"
        type="text"
        name="address"
        value={address}
        onChange={handleAddressChange}
        placeholder='Address'
        required />
      <br />
      <br />
      <input
        className="form_input"
        placeholder='Project Type'
        value={projectType}
        onChange={handleProjectChange}
        name="project_type" />
      <br />
      <br />
      <input
        className="form_input"
        type="text"
        name="time_line"
        value={timeline}
        onChange={handleTimelineChange}
        placeholder="Timeline"
        required />
      <br />
      <br />
      <input
        className="form_input"
        type="text"
        name="budget"
        value={budget}
        onChange={handleBudgetChange}
        placeholder='Budget' />
      <br />
      <br />

      <textarea
        id="data"
        name="message"
        value={message}
        onChange={handleMessageChange}
        placeholder='Message' required />
      <br />
      <br />
      <input className="form_input" type="submit" value="Send" />
    </form>
  );
};

export default Email;