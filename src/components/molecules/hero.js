import React from 'react';
import { HeroImage, HeroText } from '../atoms/hero-image';

const Hero = () => (
  <div className="hero">
    <HeroImage
      imageUrl="https://cdn.wallpapersafari.com/68/66/KMgcJP.jpg"
      altText="Hero Image"
    />
    <HeroText
      title="This is the Hero Image Title"
      subtitle="...And this the Hero Image Subtitle"
    />
  </div>
);

export default Hero;
