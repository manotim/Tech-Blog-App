import React from 'react'
import InnovationItem from './InnovationItem'

function InnovationsList({ innovations, onDeleteInnovationItem }) {
  return (
    <div>
      {innovations.map((innovation) => {
        return <InnovationItem {...innovation} key={innovation.id} onDeleteInnovationItem={onDeleteInnovationItem}/>
      })}
      
    </div>
  )
}

export default InnovationsList
