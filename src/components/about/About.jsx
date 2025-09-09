import React from 'react';
import './About.css';
import Image from '../../assets/avatar-about.png';
import Resume from '../../assets/LauraCV.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">Sobre Mi </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            ¡Hola! Soy Laura, una chica de Talavera de la Reina 🌍.  
                            Actualmente estoy formándome en Python, Inteligencia Artificial y desarrollo full stack, porque me encanta meterme en líos con el código (los bugs no tanto, pero bueno… vienen en el pack 😅).  
                            En esta web iré subiendo los proyectos que vaya creando. Algunos serán útiles, otros curiosos, y probablemente alguno nazca solo para que yo aprenda a base de prueba y error 🔥.  
                            Mi objetivo es crecer como desarrolladora, divertirme en el proceso y, de paso, demostrar que programar no tiene por qué ser aburrido. 🚀   Estas son las tecnologias que estoy usando:
                        </p>
                        <ul className="about__list">
                            <li>Python</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Descargar CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About