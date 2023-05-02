import React from 'react'
import InnovationItem from './InnovationItem'

function InnovationsList({ innovations }) {
  return (
    <div>
      {innovations.map((innovation) => {
        return <InnovationItem {...innovation} key={innovation.id} />
      })}
    </div>
  )
}

export default InnovationsList
