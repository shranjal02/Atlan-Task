import './App.css';
import React, { useState } from 'react';
import QueryInput from './QueryInput';
import QueryResults from './QueryResults';

const App = () => {
  const [queryResults, setQueryResults] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);

  const handleQuerySubmit = (query) => {
    // This is a dummy function since we don't have a backend.
    // You can replace this with actual logic to handle SQL queries.
    // For demonstration purposes, we'll just set some mock data based on the query.
    const mockData = getMockDataForQuery(query);
    setQueryResults(mockData);
  };

  const handleQuerySelection = (queryIndex) => {
    // This function will be used to toggle between different queries.
    // For demonstration purposes, let's assume we have three predefined queries.
    setSelectedQuery(queryIndex);
    const mockData = getMockDataForQuery(`SELECT * FROM table_${queryIndex}`);
    setQueryResults(mockData);
  };

  const getMockDataForQuery = (query) => {
    // A function to generate mock data based on the query.
    // You can customize this as per your needs or use real data if available.
    // For simplicity, we'll just create some random data here.
    const columns = ['ID', 'Name', 'Age'];
    const data = [];
    for (let i = 1; i <= 5; i++) {
      data.push({
        ID: i,
        Name: `User ${i}`,
        Age: Math.floor(Math.random() * 30) + 20,
      });
    }
    return data;
  };

  return (
    <div>
      <h1>SQL Query Application</h1>
      <QueryInput onQuerySubmit={handleQuerySubmit} />
      <div>
        <h2>Queries</h2>
        <button onClick={() => handleQuerySelection(1)}>Query 1</button>
        <button onClick={() => handleQuerySelection(2)}>Query 2</button>
        <button onClick={() => handleQuerySelection(3)}>Query 3</button>
      </div>
      <div>
        <h2>Results</h2>
        {selectedQuery !== null && <QueryResults data={queryResults} />}
      </div>
    </div>
  );
};

export default App;
