import { useState } from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profilePic from "../assets/myesha.png"
import LineGradient from "../components/LineGradient";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);

  const openCalendly = () => {
    window.open("https://calendly.com/myeshamahazabeen/30min", "_blank");
  };

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div>
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={profilePic}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={profilePic}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Myesha {""}
            Mahazabeen
          </p>
          <p className="mt-5 mb-7 text-sm text-center md:text-start text-red">
            <b>maisha.mahjabin27@gmail.com</b>
          </p>
          <p className="mt-5 mb-7 text-sm text-center md:text-start">
            Passionate about crafting digital solutions and pushing the boundaries of technology. I am an aspiring Software Engineer, Web developer & UX designer ready to make my mark in the world of technology
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <button
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={openCalendly}
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </button>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        
      </div>

      {/* Render Calendly modal if it's open */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <iframe
            className="z-50"
            src="https://calendly.com/myeshamahazabeen/30min"
            width="80%"
            height="80%"
            frameBorder="0"
          />
          <button
            className="absolute top-5 right-5 z-50 px-3 py-1 bg-white border border-gray-300 rounded-md"
            onClick={() => setCalendlyOpen(false)}
          >
            Close
          </button>
        </div>
      )}
      
      {/* <LineGradient /> */}
    </section>
    // <LineGradient />
  );
};

export default Landing;
