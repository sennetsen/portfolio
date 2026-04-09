import SectionTitle from '../components/SectionTitle'
import './Resume.css'

export default function Resume() {
  const hasResume = false

  return (
    <div className="resume">
      <div className="resume-inner">
        <SectionTitle>My Resume</SectionTitle>

        <div className="resume-embed">
          {hasResume ? (
            <iframe src="/resume.pdf" title="Resume" />
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

        <div className="resume-cta">
          <a href="/resume.pdf" download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}
