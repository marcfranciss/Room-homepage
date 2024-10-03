import "./aboutSection.sass";
import aboutDark from "../../assets/images/image-about-dark.jpg";
import aboutLight from "../../assets/images/image-about-light.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const AboutSection = () => {
  return (
    <section id='s-about'>
      <div className='container'>
        <div className='about__dark'>
          <picture>
            <LazyLoadImage
              src={aboutDark}
              alt='Visualization of furnitures in darker lighting'
            />
          </picture>
        </div>
        <div className='about__text'>
          <h2>ABOUT OUR FURNITURE</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className='about__light'>
          <picture>
            <LazyLoadImage
              src={aboutLight}
              alt='Visualization of furnitures in brighter lighting'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
