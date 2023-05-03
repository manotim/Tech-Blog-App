import React from 'react'

function InnovationItem({
  innovation_title,
  innovation_story,
  innovation_name,
  innovation_year,
  source,
  views,
  innovation_image,
  onDeleteInnovationItem,
  id
}) 

{
  // const onDeleteInnovationItem = () => onDeleteInnovationItem(id);
  const deleteInnovationItem = () => onDeleteInnovationItem(id);

  return (
    <div>
      <h1>{innovation_title}</h1>
      <h1>{innovation_name}</h1>
      <h1>{innovation_year}</h1>
      <p>{innovation_story}</p>
      <h1>{views}</h1>
      <img src={innovation_image} alt='story picture' />
      <p>{source}</p>
      <button onClick={deleteInnovationItem}>❌</button>
    </div>
  )
}

export default InnovationItem
