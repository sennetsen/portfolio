import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <div className="about-inner">
        <SectionTitle>About Me</SectionTitle>

        <div className="about-headshot">
          {/* Replace with: <img src="/headshot.jpg" alt="Sennet Senadheera" /> */}
          <div className="headshot-placeholder">
            <span>Your Photo</span>
          </div>
        </div>

        <h1 className="about-greeting">
          Hello, I'm <span className="about-name">Sennet Senadheera</span>
        </h1>

        <div className="about-bio">
          <p>
            I am a passionate Computer Science major with a strong interest in
            software development, data structures, and algorithms. Currently
            pursuing my degree at Cornell University, I am constantly seeking
            opportunities to expand my knowledge and apply my skills to
            real-world problems.
          </p>
          <p>
            My coursework has provided me with a strong foundation in
            programming languages such as Python, Java, and C++, as well as a
            deep understanding of object-oriented design principles and database
            management. I enjoy tackling complex challenges and am always eager
            to learn new technologies and methodologies.
          </p>
          <p>
            Outside of academics, I am involved in entrepreneurial ventures and
            collaborative projects that push the boundaries of innovation. I
            believe in continuous learning and collaboration to achieve
            innovative solutions.
          </p>
          <p className="about-closing">
            Feel free to explore my projects and connect with me!
          </p>
        </div>

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
