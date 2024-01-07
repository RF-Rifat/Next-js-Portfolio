"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import TypeWriter from "./TypeWriter";
import { FaDownload, FaEnvelope } from "react-icons/fa";

function HeroSection() {
  return (
    <header className="text-white p-8 bg-transparent fixed max-w-7xl my-auto top-24 z-30 mx-auto">
      <div className="mx-auto grid lg:grid-cols-2 w-full items-center gap-3">
        <div>
          <div className="absolute w-full inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
          </div>
          <span className="aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
          <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 text-white space-y-5 lg:space-y-8">
            <Typography variant="h1" color="purple-500" className="leading-tight font-bold text-4xl lg:text-5xl">
              Hi, I&apos;m <span className="text-white">Rifad</span>
            </Typography>
            <TypeWriter className="text-3xl"></TypeWriter>
            <Typography variant="body" color="gray-300" className="mt-4 lg:mt-6 text-base lg:text-lg text-justify">
              I&apos;m a Junior MERN Stack Developer passionate about creating efficient, scalable, and innovative solutions. My journey involves continuous learning and problem-solving, turning ideas into reality with code.
            </Typography>
            <div className="flex space-x-4 mt-6 lg:mt-8">
              <a href="#contact">
                <Button
                  color="indigo"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light"
                  className="bg-indigo-500 text-white flex gap-2 text-base lg:text-lg"
                >
                  <FaEnvelope className="mt-1" />
                  Contact Me
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1hojg5_y1kYig2PAZpK153xh3zIgFuz17/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="teal"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light"
                  className="bg-teal-500 text-white flex gap-2 text-base lg:text-lg"
                >
                  <FaDownload className="mt-1" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="My Profile"
          src="/Profile.jpg"
          className="h-[32rem] w-full rounded-xl object-cover z-30"
        />
      </div>
    </header>
  );
}

export default HeroSection;
