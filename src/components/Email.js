import React, { useRef } from 'react';
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

  return (

    <form id="form" ref={form} onSubmit={sendEmail}>
      <input className="form_input" type="text" name="from_name" />
      <label className="form_input_label">Name</label>
      <br />
      <br />
      <input className="form_input" type="email" name="from_email" />
      <label className="form_input_label">Email</label>
      <br />
      <br />
      <input className="form_input" type="text" name="address" />
      <label className="form_input_label">Location</label>
      <br />
      <br />
      <input className="form_input" name="project_type" />
      <label className="form_input_label">Project type</label>
      <br />
      <br />
      <input className="form_input" type="text" name="time_line" />
      <label className="form_input_label">Timeline</label>
      <br />
      <br />
      <input className="form_input" type="text" name="budget" />
      <label className="form_input_label">Budget</label>
      <br />
      <br />

      <textarea id="data" name="message" />
      <label className="form_input_label">Message</label>
      <br />
      <br />
      <input className="form_input" type="submit" value="Send" />
    </form>
  );
};

export default Email;