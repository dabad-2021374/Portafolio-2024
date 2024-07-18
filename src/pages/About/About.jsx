import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavBar } from '../../components/Navbar/NavBar';
import './About.css';
import { FaUser, FaCalendarAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import yo from '../../../public/yo.png';
import cv from '../../../public/Cv.jpg';

export const About = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const educationData = [
        {
            year: "2012 - 2018",
            institution: "Colegio Particular Mixto Santa María de los Angeles",
            estudied: "Primaria",
        },
        {
            year: "2019 - 2020",
            institution: "Colegio Parroquial Nuestra Señora de Guadalupe",
            estudied: "1ro y 2do Básico",
        },
        {
            year: "2021",
            institution: "Centro Educativo Tecnico Laboral Kinal",
            estudied: "3ro Básico",
        },
        {
            year: "2022 - 2024",
            institution: "Centro Educativo Tecnico Laboral Kinal",
            estudied: "Périto Informatica",
        },
    ];

    return (
        <div>
            <NavBar />
            <div className="about-container">
                <div className="about-content">
                    <div className="about-image">
                        <img src={yo} alt="Sebastian Abad" />
                    </div>
                    <div className="about-text">
                        <h1 className="about-title">
                            SEBASTIAN <span className="highlight">ABAD</span>
                        </h1>
                        <h2 className="about-subtitle">
                            Programador <span className="highlight-secondary">Jr</span>
                        </h2>
                        <p className="about-description">
                            Mi nombre es <span className="highlight">Sebas</span>. Soy un Programador Junior emergente y en busca de oportunidades que me ayuden a crecer tanto laboralmente y también como persona, acá puedes encontrar un poco de mis proyectos, habilidades, etc.
                        </p>
                        <Button className="learn-more-button custom-button" onClick={handleShow}>
                            Leer más
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                centered
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Body className='modal-body'>
                    <div className="modal-custom-content">
                        <div className="modal-left">
                            <img src={yo} alt="Sebastian Abad" className="modal-image" />
                            <center>
                                <h2 className='space-title'>SEBASTIAN <span className="highlight">ABAD</span></h2>
                                <h4><span className="highlight">Programador</span> Jr</h4>
                            </center>
                            <ul>
                                <li><FaUser /> Denis Sebastian Abad Santos</li>
                                <li><FaCalendarAlt /> 14.07.2006</li>
                                <li><FaPhone /> +502 4491 3932</li>
                                <li><FaEnvelope /> denisabad.personal@gmail.com</li>
                                <li><FaMapMarkerAlt /> Guatemala, Ciudad de Guatemala</li>
                            </ul>
                            <a href={cv} download="CV - Denis Sebastian Abad Santos">
                                <Button variant="danger">Descargar CV</Button>
                            </a>
                        </div>
                        <div className="modal-right">
                            <h3 className='margin-bottom'><span className="highlight">Sobre</span> mí</h3>
                            <p>
                                Hola! Mi nombre es <span className="highlight">Denis Sebastian Abad Santos</span> pero me gusta que me digan<span className="highlight"> Sebas</span>. Tengo 18 años y soy estudiante de programación, dedicado en lo que hago. Estoy buscando oportunidades que me ayuden a crecer profesionalmente y como persona.
                            </p>
                            <h3><span className="highlight">Conocimientos</span> en</h3>
                            <div className="knowledge-container">
                                <ul className="knowledge-column">
                                    <li>Java</li>
                                    <li>JavaSE</li>
                                    <li>JavaEE</li>
                                    <li>JavaFX</li>
                                    <li>Programación orientada a objetos</li>
                                    <li>Javascript</li>
                                    <li>MySQL</li>
                                </ul>
                                <ul className="knowledge-column">
                                    <li>MongoDB</li>
                                    <li>Javascript</li>
                                    <li>NODEJS</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>REACT</li>
                                    <li>GIT</li>
                                </ul>
                            </div>
                            <h3><span className="highlight">Habilidades en</span> programación</h3>
                            <div className="skills-container">
                                <div className="skill">
                                    <span>Java</span>
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: '80%' }}></div>
                                    </div>
                                    <span className="skill-percentage">80%</span>
                                </div>
                                <div className="skill">
                                    <span>JavaScript</span>
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="skill-percentage">85%</span>
                                </div>
                                <div className="skill">
                                    <span>MySQL</span>
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="skill-percentage">85%</span>
                                </div>
                                <div className="skill">
                                    <span>MongoDB</span>
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: '90%' }}></div>
                                    </div>
                                    <span className="skill-percentage">90%</span>
                                </div>
                                <div className="skill">
                                    <span>HTML</span>
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: '90%' }}></div>
                                    </div>
                                    <span className="skill-percentage">90%</span>
                                </div>
                                <div className="skill">
                                    <span>CSS</span>
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="skill-percentage">85%</span>
                                </div>
                                <div className="skill">
                                    <span>REACT</span>
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: '80%' }}></div>
                                    </div>
                                    <span className="skill-percentage">80%</span>
                                </div>
                                <div className="skill">
                                    <span>GIT</span>
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: '90%' }}></div>
                                    </div>
                                    <span className="skill-percentage">90%</span>
                                </div>
                            </div>
                            <h3><span className="highlight">Educa</span>ción</h3>
                            <div className="timeline">
                                {educationData.map((edu, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-item-content">
                                            <span className="tag">{edu.year}</span>
                                            <p>{edu.estudied}</p>
                                            <time>{edu.institution}</time>
                                            <span className="circle"></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};
