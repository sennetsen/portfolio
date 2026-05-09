import { Link } from 'react-router-dom'
import { FiCode, FiTrendingUp, FiLayers, FiAward } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import './Home.css'

const highlights = [
  {
    icon: <FiCode />,
    title: 'Software Engineering',
    description:
      'Building robust applications with modern technologies and clean architecture.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Entrepreneurship',
    description:
      'Driving innovation through startup ventures and creative problem-solving.',
  },
  {
    icon: <FiLayers />,
    title: 'Project Leadership',
    description:
      'Leading cross-functional teams to deliver impactful technical solutions.',
  },
  {
    icon: <FiAward />,
    title: 'Cornell University',
    description:
      'Pursuing Computer Science with a focus on algorithms and systems design.',
  },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner">
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Cornell CS '26 · New York / Ithaca
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            Welcome to my <span className="hero-accent">Portfolio</span>
          </motion.h1>
          <motion.div
            className="hero-typewriter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typewriter
              options={{
                strings: [
                  'Software Engineer.',
                  'Entrepreneur.',
                  'Builder of AI-powered products.',
                  'Co-founder of Prysm Creative Inc.',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 60,
              }}
            />
          </motion.div>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            Software engineer, entrepreneur, and Cornell senior building products at the intersection of AI, full-stack systems, and creator-economy tools.
          </motion.p>
        </div>
      </section>

      <section className="highlights">
        <motion.div
          className="highlights-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {highlights.map((item, i) => (
            <motion.div
              className="highlight-card"
              key={i}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
              }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="home-cta">
        <Link to="/projects" className="btn btn-primary">
          View My Work
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
