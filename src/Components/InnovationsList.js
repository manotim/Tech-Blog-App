import React from 'react'
import InnovationItem from './InnovationItem'


function InnovationsList({ innovations, removeInnovation }) {
  
  return (
    <main>
      <section className='container'>
        {innovations.map((innovation) => {
          return (
            <InnovationItem
              {...innovation}
              key={innovation.id}
              removeInnovation={removeInnovation}
              likeInnovation={innovation}
            />
          )
        })}
      </section>
    </main>

  )
}

export default InnovationsList
