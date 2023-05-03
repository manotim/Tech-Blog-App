import React, { useState } from 'react'

function InnovationItem({
  innovation_title,
  innovation_story,
  innovation_name,
  innovation_year,
  source,
  innovation_image,
  removeInnovation,
  id,
}) {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='innovation'>
      <img src={innovation_image} alt={innovation_name} />
      <footer>
        <div className='innovation-info'>
          <h2 className='innovation-title'>{innovation_title}</h2>
          <h4 className='innovation-year'>
            Innovation Year: {innovation_year}
          </h4>
        </div>

        <p>
          {readMore ? innovation_story : `${innovation_story.slice(0, 2)}...`}
          <button className='btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <h3>
          Source: <a href={source}>{source}</a>
        </h3>
        <button className='danger-btn' onClick={() => removeInnovation(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  )
}

export default InnovationItem
