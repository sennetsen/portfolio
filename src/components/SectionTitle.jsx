import './SectionTitle.css'

export default function SectionTitle({ children }) {
  return (
    <div className="section-title">
      <span className="section-title-line" />
      <h2>{children}</h2>
      <span className="section-title-line" />
    </div>
  )
}
