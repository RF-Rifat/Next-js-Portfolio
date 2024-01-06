// HeroSection.js
import React from "react";
import Typing from "react-typing-effect";
// import "@/Components/Home-Components/HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, I&apos;m Your Name
        </h1>
        <Typing speed={100} hideCursor={false}>
          <p>Web Developer</p>
          <Typing.Backspace count={15} />
          <p>UI/UX Designer</p>
          <Typing.Backspace count={18} />
          <p>Passionate Learner</p>
        </Typing>
      </div>
    </div>
  );
};

export default HeroSection;
