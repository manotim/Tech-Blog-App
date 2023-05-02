import React, {useState} from 'react'

function AddInnovation({addInnovation}) {
    const [innovation_image, setInnovation_image] = useState('')
    const [innovation_title, setInnovation_title] = useState('')
    const [innovaton_name, setInnovation_name] = useState('')
    const [innovator_story, setInnovator_story] = useState('')
    const  [source, setSource] = useState('')
    const [innovation_year, setInnovation_year] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault ();
        addInnovation({innovation_image, innovation_title, innovaton_name, innovator_story, source, innovation_year});
        setInnovation_image('');
        setInnovation_title('')
        setInnovation_name('')
        setInnovator_story('')
        setSource('')
        setInnovation_year('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='innovation_image'>innovation_image</label>
        <input
        type='text'
        id='innovation_image'
        value={innovation_image}
        onChange={(event)=> setInnovation_image(event.target.value)}
        required
        />
        <label htmlFor='innovation_title'>innovation_title</label>
        <input
        type='text'
        id='innovation_title'
        value={innovation_title}
        onChange={(event)=> setInnovation_title(event.target.value)}
        required
        />
        <label htmlFor='innovation_name'>innovation_name</label>
        <input
        type='text'
        id='innovation_name'
        value={innovaton_name}
        onChange={(event)=> setInnovation_name(event.target.value)}
        required
        />
        <label htmlFor='innovator_story'>innovator_story</label>
        <textarea
        id='innovator_story'
        value={innovator_story}
        onChange={(event)=> setInnovator_story(event.target.value)}
        required
        ></textarea>
        <label htmlFor='source'>source</label>
        <input
        type='text'
        id='source'
        value={source}
        onChange={(event)=>setSource(event.target.value)}
        required
        />
        <label htmlFor='innovation_year'>setInnovation_year</label>
        <input
        type='text'
        id='innovation_year'
        value={innovation_year}
        onChange={(event)=>setInnovation_year(event.target.value)}
        required
        />
        <button type='submit'>AddInnovation</button>
    </form>
  )
}

export default AddInnovation