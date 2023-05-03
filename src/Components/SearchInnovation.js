import React, { useState } from 'react'

function SearchInnovation({ getInnovation }) {
  const [search, SetSearch] = useState('')

  function handleChange(e) {
    SetSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getInnovation(search)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchname'
          id='searchname'
          value={search}
          onChange={handleChange}
        />
        <button type='submit'>
          <span class='material-symbols-outlined'>search</span>
        </button>
      </form>
    </div>
  )
}

export default SearchInnovation
