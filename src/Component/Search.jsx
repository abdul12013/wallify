import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

  const Search = ({ onSearch }) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
  
    const handleChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleClick = (e) => {
      e.preventDefault();
  
      // If a custom onSearch function is provided, call it
      if (onSearch) {
        onSearch(query);
      } else {
        // Default behavior: navigate to /data
        navigate('/data', { state: query });
      }
    };
  return (
    <>
    <form className=" bg-slate-200  flex flex-row  pt-10 md:flex-row items-center justify-center md:justify-center gap-4 h-auto md:h-28 w-full px-4 md:px-24 ">
      <input
      onChange={handleChange}
      value={query}
        className="w-full md:w-1/2 h-12 text-lg rounded-lg px-4 focus:outline-green-400"
        type="text"
        placeholder="Search Wallify"
      />
      <button onClick={handleClick}
        className="h-12 w-28 md:w-36 border text-lg border-green-400 bg-transparent rounded-md"
      >
        Search
      </button>
    </form>
  </>
  )
}

export default Search