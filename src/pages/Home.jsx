import { Link } from 'react-router-dom'
import { FiCode, FiTrendingUp, FiLayers, FiAward } from 'react-icons/fi'
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
          <h1>Welcome to my Portfolio!</h1>
          <p className="hero-subtitle">Entrepreneur &amp; Engineer</p>
        </div>
      </section>

      <section className="highlights">
        <div className="highlights-grid">
          {highlights.map((item, i) => (
            <div className="highlight-card" key={i}>
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
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
