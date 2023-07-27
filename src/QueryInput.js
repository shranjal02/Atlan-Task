import React, { useState } from 'react';

const QueryInput = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuerySubmit(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={handleChange}
          placeholder="Enter your SQL query here..."
          rows={6}
          cols={80}
        />
        <br />
        <button type="submit">Run Query</button>
      </form>
    </div>
  );
};

export default QueryInput;
