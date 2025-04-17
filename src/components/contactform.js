'use client';

import { useState } from 'react';
import  style_form  from '../styles/contacform.module.css';
import Buttonapp from './button';
import { FiSend } from "react-icons/fi";

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Mensaje enviado con éxito.');
      setFormData({ name: '', email: '', message: '' });
    } else {
        setStatus('Mensaje enviado con éxito.');
    }
  };

  return (
    <form className={style_form.forms_contac} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        className={style_form.input_larabel}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        className={style_form.input_larabel}
        required
      />
      <textarea
        name="message"
        placeholder="Escribe tu mensaje..."
        value={formData.message}
        onChange={handleChange}
        className={style_form.menssage}
        required
      />
      <Buttonapp
      value='Enviar' 
      icon={<FiSend size={25}/>}
      />
      {status && <p className="status-message">{status}</p>}
    </form>
  );
}

export default ContactForm;