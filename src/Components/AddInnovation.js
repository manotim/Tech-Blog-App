import React, { useState } from 'react'

function AddInnovation({ addInnovation }) {
  const [innovation_image, setInnovation_image] = useState('')
  const [innovation_title, setInnovation_title] = useState('')
  const [innovator_name, setInnovation_name] = useState('')
  const [innovation_story, setInnovator_story] = useState('')
  const [source, setSource] = useState('')
  const [innovation_year, setInnovation_year] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addInnovation({
      innovation_image,
      innovation_title,
      innovator_name,
      innovation_story,
      source,
      innovation_year,
    })
    setInnovation_image('')
    setInnovation_title('')
    setInnovation_name('')
    setInnovator_story('')
    setSource('')
    setInnovation_year('')
  }

  return (
    <fieldset>
      <legend>Create New Innovation: </legend>
      <form className='add-form' onSubmit={handleSubmit}>
        <label htmlFor='innovation_image'>Innovation Image Link: </label>
        <input
          type='text'
          id='innovation_image'
          value={innovation_image}
          onChange={(event) => setInnovation_image(event.target.value)}
          required
        />
        <br />
        <label htmlFor='innovation_title'>Innovation Title: </label>
        <input
          type='text'
          id='innovation_title'
          value={innovation_title}
          onChange={(event) => setInnovation_title(event.target.value)}
          required
        />
        <br />
        <label htmlFor='innovator_name'>Who Innovated?: </label>
        <input
          type='text'
          id='innovator_name'
          value={innovator_name}
          onChange={(event) => setInnovation_name(event.target.value)}
          required
        />
        <br />
        <label htmlFor='innovation_story'>Innovation Story: </label>
        <textarea
          id='innovation_story'
          value={innovation_story}
          onChange={(event) => setInnovator_story(event.target.value)}
          required
        ></textarea>
        <br />
        <label htmlFor='source'>Source: </label>
        <input
          type='text'
          id='source'
          value={source}
          onChange={(event) => setSource(event.target.value)}
          required
        />
        <br />
        <label htmlFor='innovation_year'>Innovation Year: </label>
        <input
          type='text'
          id='innovation_year'
          value={innovation_year}
          onChange={(event) => setInnovation_year(event.target.value)}
          required
        />
        <br />
        <button className='add-btn' type='submit'>
          Add Innovation
        </button>
      </form>
    </fieldset>
  )
}

export default AddInnovation
