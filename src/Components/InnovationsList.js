import React from 'react'
import InnovationItem from './InnovationItem'

function InnovationsList({ innovations, editInnovation, removeInnovation }) {
  return (
    <main>
      <section className='container'>
        {innovations.map((innovation) => {
          return (
            <InnovationItem
              {...innovation}
              key={innovation.id}
              editInnovation={editInnovation}
              removeInnovation={removeInnovation}
            />
          )
        })}
      </section>
    </main>
  )
}

export default InnovationsList
