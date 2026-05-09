import { motion } from 'framer-motion'
import { FiFileText } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import './Resume.css'

export default function Resume() {
  const hasResume = true

  return (
    <div className="resume">
      <div className="resume-inner">
        <SectionTitle>My Resume</SectionTitle>

        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="resume-card-header">
            <FiFileText className="resume-card-icon" />
            <span className="resume-card-title">Sennet_Senadheera_Resume.pdf</span>
            <span className="resume-card-meta">PDF · 1 page</span>
          </div>

          <div className="resume-embed">
            {hasResume ? (
              <iframe
                src="/Sennet_Senadheera_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                title="Resume"
              />
            ) : (
              <div className="resume-placeholder">
                <p>Embedded PDF Viewer</p>
                <p className="resume-placeholder-hint">
                  Place your resume in <code>public/resume.pdf</code> and set{' '}
                  <code>hasResume</code> to <code>true</code>
                </p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="resume-cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
        >
          <a href="/Sennet_Senadheera_Resume.pdf" download className="btn btn-primary">
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  )
}
