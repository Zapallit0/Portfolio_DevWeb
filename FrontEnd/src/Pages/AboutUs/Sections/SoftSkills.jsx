import SkillsList from '../../../Components/AboutUs/SkillsList.jsx';
import { motion } from 'framer-motion';
import { softSkills } from '../../../data/skills';
import { softSkillsContainer, softSkillsTitle, softSkillsInner, scaleIn } from '../../../animations/variants';

function SoftSkills() {
  return (
    <motion.div
      className='SoftSkills'
      variants={softSkillsContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h3 variants={softSkillsTitle}>
        &gt;&gt; Soft Skills &lt;&lt;
      </motion.h3>

      <motion.div
        className='skills-container'
        variants={softSkillsInner}
      >
        {/* Left circle */}
        <motion.div
          className="decorative-circle left-circle"
          variants={scaleIn}
        />

        {/* Right circle */}
        <motion.div
          className="decorative-circle right-circle"
          variants={scaleIn}
        />

        <SkillsList skills={softSkills} />
      </motion.div>
      </motion.div>
  );
}

export default SoftSkills;
