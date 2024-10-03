import "./heroSection.sass";
import { useState } from "react";
import { ImageControler } from "./ImageControler/ImageControler";
import btnArrow from "../../assets/images/icon-arrow.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface heroImages {
  alt: string;
  dekstop: string;
  mobile: string;
}

const heroImagesArr = [
  {
    alt: "Stylistic wooden chairs and table",
    dekstop: "/Room-homepage/src/assets/images/desktop-image-hero-1.jpg",
    mobile: "/Room-homepage/src/assets/images/mobile-image-hero-1.jpg",
  },
  {
    alt: "Stylistic plastic chairs",
    dekstop: "/Room-homepage/src/assets/images/desktop-image-hero-2.jpg",
    mobile: "/Room-homepage/src/assets/images/mobile-image-hero-2.jpg",
  },
  {
    alt: "Black foldable chair",
    dekstop: "/Room-homepage/src/assets/images/desktop-image-hero-3.jpg",
    mobile: "/Room-homepage/src/assets/images/mobile-image-hero-3.jpg",
  },
];

export const HeroSection = () => {
  const [currImgIndex, setCurrImgIndex] = useState<number>(0);
  return (
    <section id='s-hero'>
      <div className='container'>
        <div className='hero-img' id='hero-img'>
          {heroImagesArr.map((images: heroImages, index: number) => {
            return (
              <picture
                key={index}
                className={currImgIndex === index ? "show" : "hide"}>
                <source media='(max-width: 767px)' srcSet={images.mobile} />
                <source media='(min-width: 768px)' srcSet={images.dekstop} />
                <LazyLoadImage src={images.dekstop} alt={images.alt} />
              </picture>
            );
          })}
          <ImageControler
            setCurrImgIndex={setCurrImgIndex}
            currImgIndex={currImgIndex}
            arr={heroImagesArr}
          />
        </div>
        <div className='hero-text'>
          <h1>Discover innovative ways to decorate</h1>
          <p>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <button className='btn-shop'>
            <span>SHOP NOW</span>
            <img src={btnArrow}></img>
          </button>
          <ImageControler
            setCurrImgIndex={setCurrImgIndex}
            currImgIndex={currImgIndex}
            arr={heroImagesArr}
          />
        </div>
      </div>
    </section>
  );
};
