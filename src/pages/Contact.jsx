import SectionTitle from '../components/SectionTitle'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import './Contact.css'

const contactInfo = {
  name: 'Sennet Senadheera',
  title: 'Computer Science Major | Aspiring Software Engineer',
  email: 'sennetsenadheera@gmail.com',
  phone: '(848) 244-0513',
  github: 'github.com/sennetsen',
  githubUrl: 'https://github.com/sennetsen',
  linkedin: 'linkedin.com/in/sennet',
  linkedinUrl: 'https://linkedin.com/in/sennet',
}

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-inner">
        <SectionTitle>Get in Touch</SectionTitle>

        <div className="contact-card">
          <div className="contact-headshot">
            <img src="/headshot_bio_pic.jpeg" alt="Sennet Senadheera" />
          </div>

          <h2 className="contact-name">{contactInfo.name}</h2>
          <p className="contact-role">{contactInfo.title}</p>

          <div className="contact-details">
            <a href={`mailto:${contactInfo.email}`} className="contact-item">
              <FiMail className="contact-icon" />
              <span>Click to email</span>
            </a>
            <a href={`tel:${contactInfo.phone}`} className="contact-item">
              <FiPhone className="contact-icon" />
              <span>{contactInfo.phone}</span>
            </a>
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FiGithub className="contact-icon" />
              <span>{contactInfo.github}</span>
            </a>
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FiLinkedin className="contact-icon" />
              <span>{contactInfo.linkedin}</span>
            </a>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="btn btn-primary contact-btn"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </div>
  )
}
