import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { NavBar } from '../../components/Navbar/NavBar'
import '../Contact/Contact.css'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { TbBrandGithubFilled } from 'react-icons/tb'
import { FaLinkedinIn } from "react-icons/fa6";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_48e8wcj',
            'template_3i67p0s',
            e.target,
            '-qooe-WWf69rk9bee'
        ).then((result) => {
            alert('Message Sent Successfully!')
        }).catch((error) => {
            alert('An error occurred, please try again', error.text)
        })

        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }

    return (
        <div>
            <NavBar />
            <div className="main-container">
                <h1 className='text-contact-main-primary'>
                    Contactar <span className="highlight">aquí</span>
                </h1>
                <div className='container-contact'>
                    <div className='info-form-container'>
                        <div>
                            <div className="info-container">
                                <FaMapMarkerAlt className="icon" />
                                Guatemala, Ciudad de Guatemala
                            </div>
                            <div className="info-container">
                                <a href="mailto:denisabad.personal@gmail.com">
                                    <FaEnvelope className="icon" />
                                    denisabad.personal@gmail.com
                                </a>
                            </div>
                            <div className="info-container">
                                <FaPhone className="icon" />
                                +502 4491 3932
                            </div>
                            <div className="info-container">
                                <a href="https://github.com/dabad-2021374" target="_blank" rel="noopener noreferrer">
                                    <TbBrandGithubFilled className="icon" />
                                    Github
                                </a>
                            </div>
                            <div className="info-container">
                                <a href="https://www.linkedin.com/in/denis-sebastian-abad-santos-3a4811319/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className="icon" />
                                    Linkedin
                                </a>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Mensaje"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="submit-button">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
