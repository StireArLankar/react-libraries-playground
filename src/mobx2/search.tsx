import React from 'react'
import { useRootData } from './hook'

const Search = () => {
  const { query, setQuery } = useRootData((store) => ({
    // query: store.query.get(),
    query: store.query,
    setQuery: store.setQuery,
  }))

  console.count('search')

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />
}

export default Search
