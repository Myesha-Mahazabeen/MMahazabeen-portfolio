import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Lasso_img from "../assets/Lasso.jpeg"
import Foster_img from "../assets/Foster-Care.jpeg"
import CCNY_img from "../assets/CCNY-ACM.jpeg"
import Plantex_img from "../assets/Plantex.jpeg"
import Project_5 from "../assets/project-5.jpeg"

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
       
        Embracing the artistry of programming, I approach each project as a canvas, blending logic and creativity to create elegant and efficient solutions. From crafting intuitive user interfaces to architecting robust backend systems, I am driven by a deep desire to bring ideas to life through lines of code. Here are some of my personal and academic projects showcasing user interfaces of various websites
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
            Web & Mobile Applications
          </div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Lasso</p>
              <p className="mt-7">
                Lasso is an e-commerce website. Collaborated in a team to develop this website with bidding system advantage. The prototype was designed using Figma, the frontend was developed using ReactJS & the backend was developed using Back4app.
              </p>
            </div>
            <img src={Lasso_img} alt="Lasso" />
          </motion.div>
          
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Foster Care</p>
              <p className="mt-7">
                Foster Care is a website designed to work as an information hub to all the foster cares in the country. Implemented HTML, CSS and JavaScrpit for the development and designed the prototype using Figma.
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
                Designed the soon to be launched website of CCNY's CS club, ACM. Currently working on the frontend using React.
              </p>
            </div>
            <img src={CCNY_img} alt="CCNY ACM" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Plantex</p>
              <p className="mt-7">
               Developed a responsive plant care web application using React with TypeScript & integrated API endpoints for plant information and care tips, while implementing a PostgreSQL database for search result storage, resulting in a robust and user-friendly application
              </p>
            </div>
            <img src={Plantex_img} alt="coming soon" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">project 5</p>
              <p className="mt-7">
                coming soon
              </p>
            </div>
            <img src={Project_5} alt="coming soon" />
          </motion.div>

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;