import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi'; // 👈 este es el de Gmail

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/LauraBlzqz"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/laura-bl%C3%A1zquez-936554253/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        href="mailto:blazquezlaura145@gmail.com"
        className="home__social-link"
      >
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default HeaderSocials;