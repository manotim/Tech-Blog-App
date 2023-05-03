import React, { useState } from 'react';


function UpdateInnovation({updateInnovation}) {
    const [innovation_image, setInnovation_image] = useState('')
    const [innovation_title, setInnovation_title] = useState('')
    const [innovaton_name, setInnovation_name] = useState('')
    const [innovator_story, setInnovator_story] = useState('')
    const [source, setSource] = useState('')
    const [innovation_year, setInnovation_year] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault ();
        updateInnovation({innovation_image, innovation_title, innovaton_name, innovator_story, source, innovation_year});
        setInnovation_image('');
        setInnovation_title('')
        setInnovation_name('')
        setInnovator_story('')
        setSource('')
        setInnovation_year('')
    }

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      // Use the name and value variables to update the corresponding state variable
      if (name === 'innovation_image') {
        setInnovation_image(value);
      } else if (name === 'innovation_title') {
        setInnovation_title(value);
      } else if (name === 'innovation_name') {
        setInnovation_name(value);
      } else if (name === 'innovator_story') {
        setInnovator_story(value);
      } else if (name === 'source') {
        setSource(value);
      } else if (name === 'innovation_year') {
        setInnovation_year(value);
      }
    };
    

   
    return (
      <form onSubmit={handleSubmit}>
          <label htmlFor='innovation_image'>innovation_image</label>
          <input
          type='text'
          id='innovation_image'
          value={innovation_image}
          onChange={handleInputChange}
          required
          />
          <label htmlFor='innovation_title'>innovation_title</label>
          <input
          type='text'
          id='innovation_title'
          value={innovation_title}
          onChange={handleInputChange}
          required
          />
          <label htmlFor='innovation_name'>innovation_name</label>
          <input
          type='text'
          id='innovation_name'
          value={innovaton_name}
          onChange={handleInputChange}
          required
          />
          <label htmlFor='innovator_story'>innovator_story</label>
          <textarea
          id='innovator_story'
          value={innovator_story}
          onChange={handleInputChange}
          required
          ></textarea>
          <label htmlFor='source'>source</label>
          <input
          type='text'
          id='source'
          value={source}
          onChange={handleInputChange}
          required
          />
          <label htmlFor='innovation_year'>Innovation_year</label>
          <input
          type='text'
          id='innovation_year'
          value={innovation_year}
          onChange={handleInputChange}
          required
          />
          <button type='submit'>UpdateInnovation</button>
      </form>
    ) 
}  
     
export default UpdateInnovation; 