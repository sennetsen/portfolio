import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import './Projects.css'

const projects = [
  {
    title: 'Tambr — AI Audiobook iOS App',
    description:
      'Built and shipped Tambr as the second product under Prysm Creative Inc., an iOS app that converts PDFs, EPUBs, URLs, and raw text into AI-narrated audiobooks. Integrated TTS APIs with 25+ premium voices, end-to-end encrypted cloud sync across devices, and a tiered subscription model. Built with Swift and SwiftUI, with a focus on a clean reading-to-listening experience for users who want to consume content on the go.',
    tags: ['Swift', 'SwiftUI', 'AI/TTS APIs', 'Cloudflare Workers', 'iOS'],
    image: '/tambr_homepage.png',
    liveUrl: 'https://trytambr.com',
  },
  {
    title: 'Capital One — ML Risk Pipeline',
    description:
      'Engineered an end-to-end Kubernetes pipeline for a deep learning model using KFPlumber, an internal orchestration tool, to assess client risk based on Net Present Value and other proprietary financial indicators. Integrated a PyTorch model into the pipeline enabling scalable training and inference across distributed environments, and monitored pipeline cost using KubeCost and New Relic, reducing execution cost by 25% via Dask parallel compute optimizations.',
    tags: ['Kubernetes', 'AWS', 'PyTorch', 'Dask', 'KubeCost', 'New Relic', 'Python'],
    image: '/Capital-one-Logo-4.png',
  },
  {
    title: 'Prysm — Creator Economy Platform',
    description:
      'Co-founded Prysm Creative Inc. under Life Changing Labs accelerator\'s Summer 2024 cohort and launched Prysm, an online creator economy platform that enables creators to monetize fan requests across sectors. Conducted 100+ hours of user feedback interviews, attracted 45 creators with a combined following of over 2 million, and hired 2 interns to support product development. Built with React and Next.js on a PostgreSQL backend handling 300+ product transactions per day.',
    tags: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Figma', 'Agile'],
    image: '/prysm_homepage.png',
    repoUrl: 'https://github.com/sennetsen/prysm-app',
  },
  {
    title: 'MeOH Inc. — Carbon Emissions Tracker',
    description:
      'Structured a PostgreSQL database to collect client transactional records containing carbon emission information and implemented RESTful API endpoints to securely manage enterprise records, supporting over 150 API calls per minute. Developed a generative AI chatbot using Python to assist clients and reduced customer support response times by about 30%.',
    tags: ['Python', 'Java', 'PostgreSQL', 'OpenAI API', 'AWS EC2', 'Salesforce'],
    image: '/meOH_img.webp',
  },
  {
    title: 'ESW — Campus Food Waste Tracker',
    description:
      'Led development of a campus food waste tracking web app for Cornell University Engineers for a Sustainable World, a 75+ member sustainability project team. Expanded the Django backend and migrated the frontend to React, while managing finances and corporate sponsorships including Boeing as treasurer.',
    tags: ['Django', 'React', 'Python', 'JavaScript'],
    image: '/esw_logo.png',
  },
  {
    title: 'OFishl Fishing Tournament',
    description:
      'Developed OFishl, a fishing game built entirely in a functional paradigm using OCaml. Implemented game mechanics including audio, swimming, fish-catching, store transactions, and resource management. Achieved exceptional code coverage surpassing 95% with over 550 lines of test code, employing both glass-box and black-box testing strategies using OUnit and Bisect_ppx frameworks.',
    tags: ['OCaml', 'OUnit', 'Bisect_ppx', 'Functional Programming'],
    image: '/ofishl-ocaml-logo.png',
    repoUrl: 'https://github.com/sennetsen/ofishl',
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
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  <span>Project Image</span>
                </div>
              )}
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              )}
              <p className="project-description">{project.description}</p>
              {(project.liveUrl || project.repoUrl) && (
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-primary"
                    >
                      <FiExternalLink /> View Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn project-link-secondary"
                    >
                      <FiGithub /> View Repo
                    </a>
                  )}
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
