import React, { useState } from 'react'
import EditInnovation from './EditInnovation'

function InnovationItem({
  editInnovation,
  innovation_title,
  innovation_story,
  innovator_name,
  innovation_year,
  source,
  innovation_image,
  removeInnovation,
  id,
}) {
  const [readMore, setReadMore] = useState(false)
  const [toggleChangeStory, setToggleChangeStory] = useState(false)

  function handleEditStory() {
    setToggleChangeStory(!toggleChangeStory)
  }

  return (
    <article className='innovation'>
      <img src={innovation_image} alt={innovator_name} />
      <footer>
        <div className='innovation-info'>
          <h2 className='innovation-title'>
            {innovation_title}
            <i> by: {innovator_name}</i>
          </h2>
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
        {toggleChangeStory ? (
          <EditInnovation
            editInnovation={editInnovation}
            innovation_title={innovation_title}
            innovation_story={innovation_story}
            innovator_name={innovator_name}
            innovation_year={innovation_year}
            source={source}
            innovation_image={innovation_image}
            id={id}
          />
        ) : null}
        <button className='danger-btn' onClick={() => removeInnovation(id)}>
          Not Interested
        </button>
      </footer>
      <button className='edit-story' id='edit-story' onClick={handleEditStory}>
        Change Story
      </button>
    </article>
  )
}

export default InnovationItem
