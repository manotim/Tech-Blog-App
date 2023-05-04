import React, { useState } from 'react'

function EditInnovation({
  editInnovation,
  innovation_title,
  innovation_story,
  innovator_name,
  innovation_year,
  source,
  innovation_image,
  id,
}) {
  const [innovation, setInnovation] = useState({
    innovation_title: innovation_title,
    innovation_story: innovation_story,
    innovator_name: innovator_name,
    innovation_year: innovation_year,
    source: source,
    innovation_image: innovation_image,
    id: id,
  })

  function handleChange(event) {
    let key = event.target.id
    setInnovation((prevObj) => {
      return { ...prevObj, [key]: event.target.value }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    editInnovation(innovation)
  }
  return (
    <div>
      <fieldset>
        <form className='add-form' onSubmit={handleSubmit}>
          <label htmlFor='innovation_image'>Innovation Image Link: </label>
          <input
            type='text'
            id='innovation_image'
            value={innovation.innovation_image}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor='innovation_title'>Innovation Title: </label>
          <input
            type='text'
            id='innovation_title'
            value={innovation.innovation_title}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor='innovation_name'>Who Innovated?: </label>
          <input
            type='text'
            id='innovator_name'
            value={innovation.innovator_name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor='innovation_story'>Innovation Story: </label>
          <textarea
            id='innovation_story'
            value={innovation.innovation_story}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <label htmlFor='source'>Source: </label>
          <input
            type='text'
            id='source'
            value={innovation.source}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor='innovation_year'>Innovation Year: </label>
          <input
            type='text'
            id='innovation_year'
            value={innovation.innovation_year}
            onChange={handleChange}
            required
          />
          <br />
          <button className='add-btn' type='submit'>
            Edit Innovation
          </button>
        </form>
      </fieldset>
    </div>
  )
}

export default EditInnovation
