import React, { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleInputChange = event => {
    setSearchName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!searchName.trim()) return alert('Can not be empty');
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className="SearchBar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchName}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}
