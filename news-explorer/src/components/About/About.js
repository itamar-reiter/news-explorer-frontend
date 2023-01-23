import React, { useContext } from 'react';
import './About.css';
import CurrentUserContext from '../../utils/CurrentUserContext';

function About() {
  const currentUserValue = useContext(CurrentUserContext);
  return (
    <section className="about">
      <div className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This block describes the project author.
          Here you should indicate your name, what you do,
          and which development technologies you know.
          You can also talk about your experience with Practicum,
          what you learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
