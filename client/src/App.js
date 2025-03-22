import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [longestWord, setLongestWord] = useState('');

  const findLongestWord = async () => {
      const response = await fetch('http://192.168.56.1:5000/longest-word', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text })
      });


      const data = await response.json();
    setLongestWord(data.longestWord || '');
  };

  return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Find the Longest Word</h1>
        <textarea
            style={{ width: '80%', height: '100px', margin: '10px' }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
        />
        <br />
        <button onClick={findLongestWord} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Find
        </button>
        {longestWord && (
            <p style={{ marginTop: '20px', fontSize: '18px' }}>
              Longest Word: <strong>{longestWord}</strong>
            </p>
        )}
      </div>
  );
}

export default App;
