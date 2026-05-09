import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <div className="about-inner">
        <SectionTitle>About Me</SectionTitle>

        <motion.div
          className="about-headshot"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img src="/headshot_bio_pic.jpeg" alt="Sennet Senadheera" />
        </motion.div>

        <motion.h1
          className="about-greeting"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          Hello, I'm <span className="about-name">Sennet Senadheera</span>
        </motion.h1>

        <motion.div
          className="about-bio"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {[
            "I am a senior at Cornell University in the College of Engineering, majoring in Computer Science with minors in Operations Research and Dyson Business. My focus is on building software systems and machine learning pipelines that solve real-world problems, with experience spanning full-stack development, distributed systems, and AI/ML.",
            "Most recently, I worked as a Software Engineer Intern at Capital One in New York, where I engineered an end-to-end Kubernetes pipeline for a deep learning risk model and reduced execution cost by 25% through Dask parallel compute optimizations. I am also the co-founder of Prysm Creative Inc., a startup launched out of Life Changing Labs, where we have shipped two products: Prysm, a creator economy platform, and Tambr, an iOS app that converts PDFs and EPUBs into AI-narrated audiobooks.",
            "I have technical experience in Python, Java, OCaml, TypeScript/JavaScript, SQL, and C, as well as frameworks like React, Next.js, Django, PyTorch, and Swift/SwiftUI. Outside of internships and entrepreneurial work, I serve as Treasurer and Product Manager for Cornell University Engineers for a Sustainable World, where I led development of a campus food waste tracking app and manage corporate sponsorships for a 75+ member team.",
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
              }}
            >
              {text}
            </motion.p>
          ))}
          <motion.p
            className="about-closing"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
            }}
          >
            Feel free to explore my projects and connect with me!
          </motion.p>
        </motion.div>

        <div className="about-cta">
          <Link to="/projects" className="btn btn-primary">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Connect With Me
          </Link>
        </div>
      </div>
    </div>
  )
}
