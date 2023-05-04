import React, { useState } from 'react';

function UpdateInnovation({ id, updateInnovation }) {
  const [innovation_image, setInnovation_image] = useState('');
  const [innovation_title, setInnovation_title] = useState('');
  const [innovator_name, setInnovator_name] = useState('');
  const [innovator_story, setInnovator_story] = useState('');
  const [source, setSource] = useState('');
  const [innovation_year, setInnovation_year] = useState('');
  const [newText, setNewText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateInnovation(id, {
      innovation_image,
      innovation_title,
      innovator_name,
      innovator_story,
      source,
      innovation_year,
      newText,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'innovation_image':
        setInnovation_image(value);
        break;
      case 'innovation_title':
        setInnovation_title(value);
        break;
      case 'innovator_name':
        setInnovator_name(value);
        break;
      case 'innovator_story':
        setInnovator_story(value);
        break;
      case 'source':
        setSource(value);
        break;
      case 'innovation_year':
        setInnovation_year(value);
        break;
      case 'newText':
        setNewText(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='innovation_image'>Innovation Image</label>
      <input
        type='text'
        id='innovation_image'
        name='innovation_image'
        value={innovation_image}
        onChange={handleInputChange}
        required
      />

      <label htmlFor='innovation_title'>Innovation Title</label>
      <input
        type='text'
        id='innovation_title'
        name='innovation_title'
        value={innovation_title}
        onChange={handleInputChange}
        required
      />

      <label htmlFor='innovator_name'>Innovator Name</label>
      <input
        type='text'
        id='innovator_name'
        name='innovator_name'
        value={innovator_name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor='innovator_story'>Innovator Story</label>
      <textarea
        id='innovator_story'
        name='innovator_story'
        value={innovator_story}
        onChange={handleInputChange}
        required
      ></textarea>

      <label htmlFor='source'>Source</label>
      <input
        type='text'
        id='source'
        name='source'
        value={source}
        onChange={handleInputChange}
        required
      />

      <label htmlFor='innovation_year'>Innovation Year</label>
      <input
        type='text'
        id='innovation_year'
        name='innovation_year'
        value={innovation_year}
        onChange={handleInputChange}
        required
      />

      <label htmlFor='newText'>New Text</label>
      <input
        type='text'
        id='newText'
        name='newText'
        value={newText}
        onChange={handleInputChange}
        required
      />

      <button type='submit'>Update Innovation</button>
    </form>
  );
}

export default UpdateInnovation;
