import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Lasso_img from "../assets/Lasso.jpeg"
import Foster_img from "../assets/Foster-Care.jpeg"
import CCNY_img from "../assets/CCNY-ACM.jpeg"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const projectDescription = description;
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {projectDescription}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Lasso</p>
              <p className="mt-7">
                Lasso is a demo online marketplace like ebay. I designed this as a course work for Software Englineering course. The prototype was designed using Figma, and the frontend was developed using ReactJS
              </p>
            </div>
            <img src={Lasso_img} alt="Lasso" />
          </motion.div>
          
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Foster Care</p>
              <p className="mt-7">
                Foster Care is a website designed to work as an information hub to all the foster cares in the country. I designed the prototype using Figma.
              </p>
            </div>
            <img src={Foster_img} alt="Foster Care" />
          </motion.div>

          {/* ROW 2 */}
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">CCNY ACM Website</p>
              <p className="mt-7">
                Designed the soon to be launched website of CCNY's CS club, ACM. It was designed using Figma and the design has been approved by the club
              </p>
            </div>
            <img src={CCNY_img} alt="CCNY ACM" />
          </motion.div>
          <Project title="Project 4" />
          <Project title="Project 5" />

          {/* ROW 3 */}
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
