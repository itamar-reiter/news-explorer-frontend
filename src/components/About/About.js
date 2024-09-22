import React, { useContext } from 'react';
import './About.css';
import CurrentUserContext from '../../utils/CurrentUserContext';

function About() {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <section className="about">
      <div className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About me</h2>
        <p className="about__description">
          Hey there! I'm Itamar Reiter and I'm a Fullstack Developer.<br/>
          I Love building websites and learning new topics that can improve the development process and the product.<br/>
          I like to study subjects in depth and breadth, to specialize and invest.<br/>
          I have experience in website development, including server side and client side.<br/>
          I have a high work ethic, and I am willing to invest a lot for the success of the product.<br/>
          Graduate of Yandex's practicum100 course.
        </p>
      </div>
    </section>
  );
}

export default About;
