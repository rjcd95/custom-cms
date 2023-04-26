import React from 'react';
import images from 'assets/data/images';
import { HeroImage, HeroText } from '../atoms/hero-image';

const Hero = () => (
  <div className="hero">
    <HeroImage
      imageUrl={images[0].url}
      imageAlt="Hero Image"
    />
    <HeroText
      title="This is the Hero Image Title"
      subtitle="...And this the Hero Image Subtitle"
    />
  </div>
);

export default Hero;
