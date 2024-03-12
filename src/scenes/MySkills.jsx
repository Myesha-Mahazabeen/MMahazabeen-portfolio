import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SkillImg from "../assets/Untitled_design-removebg-preview.png";
import ExperienceTabs from "./ExperienceTab";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const experiences = [
    {
      title: "IT Support (College Assistant)",
      organization: "CCNY Office of Information and Technology",
      date: "April 2022-Present",
      description: (
        <p>
          &#8226; Installed and configured Blackboard, MS Office, and VIA softwares for 15+ daily faculties<br />
          <br />
          &#8226; Implemented VIA software to enhance learning by 30% and conducted monthly inspections for technical issues<br />
          
        </p>
      )
    },
    
  
    {
      title: "Data Analyst (IT Intern)",
      organization: "Center for Jewish History",
      date: "June 2021-August 2021",
      description: (
        <p>
          &#8226; Implemented data analysis techniques to enhance insights, boosting decision-making by 30%, and established secure data export procedures<br />
          <br />
          &#8226; Enforced robust security measures to track and manage members' information and payment details
        </p>
      )
    }
    
    // Add more experience objects as needed
];
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS </span>&<span className="text-red">  Experience</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          As an avid tech enthusiast and proactive learner, I continuously seek opportunities to expand my knowledge and skill set. Below, I have outlined the skills I have gathered so far and the places where I have applied them effectively
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
  <img alt="skills" className="z-10" src={SkillImg} style={{ width: '530px' }} />
</div>

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-8 gap-32">
        {/* EXPERIENCE */}
        <motion.div
  className="md:w-1/3 mt-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <div className="relative h-32">
    <div className="z-10">
      <p className="font-playfair font-semibold text-5xl">01</p>
      <p className="font-playfair font-semibold text-3xl mt-3">
        Technical
      </p>
    </div>
    <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
  </div>
  <p className="mt-5">
    <p>
      &#8226; <b>Programming Languages:</b><br />
      C, C++, Python, Java, SQL, R, Scheme
    </p>
    <br />
    <p>
      &#8226; <b>Web:</b><br />
      HTML, CSS, JavaScript, React, TypeScript, Node.js, Express.js, Postman, Back4App, Firebase, PostgreSQL, MongoDB
    </p>
    <br />
    <p>
      &#8226; <b>Other Technologies:</b><br />
      Google suite, Microsoft suite, Figma, Github, Git, AWS, VS Code, Intellij, QT, MYSQL, Canva
    </p>
  </p>
</motion.div>


        {/* INNOVATIVE */}
        <motion.div
  className="md:w-1/3 mt-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <div className="relative h-32">
    <div className="z-10">
      <p className="font-playfair font-semibold text-5xl">02</p>
      <p className="font-playfair font-semibold text-3xl mt-3">
        Honors & Leadership
      </p>
    </div>
    <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
  </div>
  <p className="mt-5">
  &#8226; Dean’s List<br />
  <br />
  &#8226; Peter Jennings Laurel Award (CUNY)<br />
  <br />
  &#8226; CodePath, Advanced Web Development<br />
  <br />
  &#8226; Google User Experience (UX) Design<br />
  <br />
  &#8226; CCNY Association for Computing Machinery (ACM)
</p>

</motion.div>

        
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <ExperienceTabs experiences={experiences} />
        </motion.div>
      </div>

    </section>
  );
};

export default MySkills;