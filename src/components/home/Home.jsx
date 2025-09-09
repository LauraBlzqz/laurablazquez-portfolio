import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-about.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Laura Blázquez</h1>
                <span className="home__education">I'm a Developer</span>

                <HeaderSocials />

            <button className="btn" disabled>
                    Contácta conmigo!
                </button>
                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home