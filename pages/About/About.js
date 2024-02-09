/* eslint-disable react/prop-types */
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "./AboutData";
import { styles } from "@/styles/Navstyle";

const ServiceCard = ({ title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      className="w-full rounded-[20px] shadow-card overflow-hidden"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    >
      <div className="bg-gradient-to-b from-[#34D399] via-[#3883F7] to-[#9333EA] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <p className="w-16 h-16 object-contain">{icon}</p>
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <section
        className="absolute lg:max-w-7xl mx-auto  py-32 lg:py-40 w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col gap-10 lg:gap-12"
        id="about"
      >
        <motion.div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I am a Frontend Developer.I can provide responsive interactive website
          with web animation using React.I also provide clean code and pixel
          perfect design.A responsive design makes your website accessible to
          all users, regardless of their device.
        </motion.p>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
