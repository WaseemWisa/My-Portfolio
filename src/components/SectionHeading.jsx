import '../Styles/components/section.scss'

function SectionHeading({title , desc}) {
  return (
    <div className="section-heading">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default SectionHeading