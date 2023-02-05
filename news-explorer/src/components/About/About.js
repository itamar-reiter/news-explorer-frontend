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
          Itamar Reiter<br/>
          Husband of Oriya, father of Akiva and Alma.<br/>
          Loves building websites and learning new topics that can improve the development process and the product.<br/>
          likes to study subjects in depth and breadth, to specialize and invest.<br/>
          Has experience in website development, including server side and client side.<br/>
          I have a high work ethic, and I am willing to invest a lot for the success of the product.<br/>
          Graduate of Yandex's practicum100 course.
          {/* This block describes the project author.
          Here you should indicate your name, what you do,
          and which development technologies you know.
          You can also talk about your experience with Practicum,
          what you learned there, and how you can help potential customers. */}
        </p>
      </div>
    </section>
  );
}

export default About;
