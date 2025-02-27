import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      gap: '10px',
      maxWidth: '600px',
      width: '100%'
    }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search the unknown..."
        style={{
          flex: 1,
          padding: '15px',
          fontSize: '16px',
          borderRadius: '25px',
          border: '2px solid #333',
          outline: 'none'
        }}
      />
      <button type="submit" style={{
        padding: '15px 30px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s'
      }}>
        Search
      </button>
    </form>
  );
};

const SearchResults = ({ results }) => {
  return (
    <div style={{
      maxWidth: '600px',
      width: '100%',
      marginTop: '20px'
    }}>
      {results.map((result, index) => (
        <div key={index} style={{
          padding: '15px',
          borderBottom: '1px solid #eee',
          cursor: 'pointer'
        }}>
          <h3 style={{ margin: '0 0 5px 0', color: '#1a0dab' }}>{result.title}</h3>
          <p style={{ margin: '0', color: '#4d5156' }}>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Placeholder search function
  const handleSearch = (query) => {
    // Simulate search results
    const dummyResults = [
      {
        title: `Results for: ${query}`,
        description: 'This is a placeholder result. Implement real search logic here.'
      },
      {
        title: 'Enigma Search',
        description: 'Discover the mysteries of the web with our advanced search algorithm.'
      },
      {
        title: 'Sample Result',
        description: 'Another example of what your search results could look like.'
      }
    ];
    setSearchResults(dummyResults);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '48px',
          color: '#333',
          marginBottom: '10px',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          ENIGMA
        </h1>
        <p style={{
          color: '#666',
          fontSize: '16px'
        }}>
          Uncover the secrets of knowledge
        </p>
      </div>
      
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      
      <footer style={{
        marginTop: 'auto',
        padding: '20px',
        color: '#666',
        textAlign: 'center'
      }}>
        © 2024 Enigma Search Engine | Decrypt the Web
      </footer>
    </div>
  );
};

const container = document.getElementById('renderDiv');
const root = ReactDOM.createRoot(container);
root.render(<App />);
