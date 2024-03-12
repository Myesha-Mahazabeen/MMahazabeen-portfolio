import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Lasso_img from "../assets/Lasso.jpeg"
import Inclusify_img from "../assets/inclusify.png"
import CCNY_img from "../assets/CCNY-ACM.jpeg"
import Plantex_img from "../assets/Plantex_cropped.jpeg"
import Project_5 from "../assets/creatorverse.png"
import weatherProject from "../assets/weather.jpg"
import taskProject from "../assets/mytodo.jpg"
import codeFM from "../assets/spark.jpg"

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



const Projects = () => {
  return (
    <section id="projects" className="pt-10 md:h-full">
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
       
        I love coding – it's like painting with logic and creativity. From sleek user interfaces to sturdy backend systems, I enjoy bringing ideas to life through code. Check out some of my projects below to see what I've been up to!
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
          <div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Lasso</p>
              <p className="mt-7">
                Lasso is an e-commerce website. Collaborated in a team to develop this website with bidding system advantage. The prototype was designed using Figma, the frontend was developed using ReactJS & the backend was developed using Back4app
              </p>
              {/* <br></br>
              <a href="https://github.com/Myesha-Mahazabeen/creatorverse/blob/master/creatorverse.gif" target="_blank">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-small text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Watch Demo
                </span>
              </button>
              </a> */}
            </div>
            <img src={Lasso_img} alt="Lasso" />
          </motion.div>
          </div>
          

          {/* ROW 2 */}
          
          <div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Plantex</p>
              <p className="mt-7">
               Developed a responsive plant care web application using React with TypeScript & integrated API endpoints for plant information and care tips, while implementing a PostgreSQL database for search result storage, resulting in a robust and user-friendly application
              </p>
               <br></br>
              <a href="https://drive.google.com/file/d/1YwVV70vaMqkzJPZxTdO3M7lZycIt4Wa6/view?usp=sharing" target="_blank">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-small text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Watch Demo
                </span>
              </button>
              </a> 
            </div>
            <img src={Plantex_img} alt="coming soon" />
          </motion.div>
          </div>
          <div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">CreatorVerse</p>
              <p className="mt-7">
              Creatorverse is a website built with React that supports CRUD operations on your favorite content creators 
              </p>
              <br></br>
              <a href=" https://drive.google.com/file/d/1M030fs2DYefFfK6AOZIMU1hCZnbhAXQj/view?usp=sharing" target="_blank">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-small text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Watch Demo
                </span>
              </button>
              </a>
            </div>
            <img src={Project_5} alt="coming soon" />
          </motion.div>
          </div>
          {/* ROW 3 */}
          <div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Weather App</p>
              <p className="mt-7">
              A weather forecast site, built using React TypeScript to fetch the weather forecast for the provided address and display it
              </p>
              <br></br>
              <a href="https://drive.google.com/file/d/1r9obmLVk7ZPVMM7iOo48de-dcd3ZTqw_/view?usp=sharing" target="_blank">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-small text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Watch Demo
                </span>
              </button>
              </a>
            </div>
            <img src={weatherProject} alt="weather project" />
          </motion.div>
          </div>
          <div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">MyTodoApp</p>
              <p className="mt-7">
              A To Do List mobile app (Android & iOS) built with Expo based React native that allows users to add tasks with due dates, sort tasks by due date, mark tasks as complete, and delete tasks
              </p>
              <br></br>
              <a href="https://drive.google.com/file/d/12pUsqDJWULj6-XgsUGJtmHHkE48XzMTx/view?usp=sharing" target="_blank">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-small text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Watch Demo
                </span>
              </button>
              </a>
            </div>
            <img src={taskProject} alt="tasks" />
          </motion.div>
          </div>
          <div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">CodeFM</p>
              <p className="mt-7"> 
              CodeFM is a React based web app that provides vibrant online community for budding coders and tech enthusiasts
              </p>
              <br></br>
              <a href="https://drive.google.com/file/d/1po_DhpKbcMkuleTxd79h5Dail2nWx3dV/view?usp=sharing" target="_blank">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-small text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Watch Demo
                </span>
              </button>
              </a>
            </div>
            <img src={codeFM} alt="coming soon" />
          </motion.div>
          </div>
          
          <div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">Inclusify</p>
              <p className="mt-7">
              A non-traditional video resume platform, empowering autistic and disabled job seekers with inclusive features and accessibility. Built with REACT JS, Node JS, PostgreSQL, Firebase, AWS S3, and Figma
              </p>
               <br></br>
              <a href="https://inclusify-b4ca3.web.app/" target="_blank">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-small text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Watch Demo
                </span>
              </button>
              </a> 
            </div>
            <img src={Inclusify_img} alt="Inclusify" />
          </motion.div>
          </div>
          <div>
          <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-26 text-deep-blue">
              <p className="text-2xl font-playfair">CCNY ACM Website</p>
              <p className="mt-7">
                Designed the soon to be launched website of CCNY's CS club, ACM. Currently working on the frontend using React
              </p>
              {/* <br></br>
              <a href="https://github.com/Myesha-Mahazabeen/creatorverse/blob/master/creatorverse.gif" target="_blank">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-small text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Watch Demo
                </span>
              </button>
              </a> */}
            </div>
            <img src={CCNY_img} alt="CCNY ACM" />
          </motion.div>
          </div>

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