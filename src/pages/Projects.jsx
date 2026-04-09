import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import './Projects.css'

const projects = [
  {
    title: 'Machine Learning Project',
    description:
      'This project involved developing a predictive model using various machine learning algorithms. We focused on data preprocessing, feature engineering, and model evaluation to achieve high accuracy. The application demonstrates real-time predictions based on user input.',
    videoEmbed: '',
  },
  {
    title: 'Data Science Initiative',
    description:
      'An in-depth analysis of large datasets to extract meaningful insights and trends. This project utilized advanced statistical methods and data visualization techniques to present complex information clearly. It highlights my skills in data manipulation and interpretation.',
    videoEmbed: '',
  },
  {
    title: 'Club Project at Cornell',
    description:
      'As part of a student organization at Cornell, I contributed to a team project focused on building collaborative software. This experience enhanced my collaborative skills and ability to work within a structured development environment. We successfully delivered a functional prototype.',
    videoEmbed: '',
  },
  {
    title: 'Individual Passion Project',
    description:
      'This personal project explores a unique web application built with modern frameworks. It allowed me to experiment with new technologies, showcasing my initiative and self-learning capabilities. The project is a testament to my passion for software development.',
    videoEmbed: '',
  },
]

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-inner">
        <SectionTitle>My Projects</SectionTitle>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-slides-placeholder">
                <span>Project Image / Slides</span>
              </div>
              <p className="project-description">{project.description}</p>
              {project.videoEmbed ? (
                <div
                  className="project-video"
                  dangerouslySetInnerHTML={{ __html: project.videoEmbed }}
                />
              ) : (
                <div className="project-video-placeholder">
                  <span>Embedded Video</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/about" className="btn btn-primary">
            Explore More
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}
