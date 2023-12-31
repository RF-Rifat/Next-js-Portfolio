import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { styles } from "@/styles/Navstyle";
import Link from "next/link";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  const logoAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 absolute max-w-7xl mx-auto top-0 z-50 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <Link
            href={"/"}
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <motion.img
              src="/images/logo.png"
              alt="logo"
              className="w-9 h-9 object-contain"
              initial="hidden"
              animate={controls}
              variants={logoAnimation}
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex uppercase">
              RF-RIFAT &nbsp;
              <span className="sm:block hidden"> | Portfolio</span>
            </p>
          </Link>

          <ul className="list-none hidden lg:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } active:text-orange-400 text-[20px] font-medium cursor-pointer nav-link text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div
            className="text-white lg:hidden flex flex-1 justify-end items-center"
            onClick={() => setToggle(!toggle)}
          >
            <div className="text-2xl">{toggle ? <AiOutlineClose /> : <RiMenu3Fill />}</div>
            <AnimatePresence>
              {toggle && (
                <motion.div
                  className="flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <ul className="text-white list-none flex justify-end items-start flex-1 flex-col gap-4">
                    {navLinks.map((nav, index) => (
                      <motion.li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[18px] ${
                          active === nav.id
                            ? "text-white nav-link"
                            : "text-secondary"
                        }`}
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={`#${nav.id}`}>{nav.title}</Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
