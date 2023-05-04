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
    <div className='search-container'>
      <form className='search-form' onSubmit={handleSubmit}>
        <label className='search-label' htmlFor='searchname'>
          Search:{' '}
        </label>
        <input
          className='search-form-input'
          type='text'
          name='searchname'
          id='searchname'
          value={search}
          onChange={handleChange}
        />
        <button className='search-btn' type='submit'>
          <span className='material-symbols-outlined'>search</span>
        </button>
      </form>
    </div>
  )
}

export default SearchInnovation
