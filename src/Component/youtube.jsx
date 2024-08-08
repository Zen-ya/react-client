import React, { useState } from 'react';
import '../Css/youtube.css'
const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=AIzaSyCpCh6nINImrdy8IACz8DT-TdHHdjrh-2Q`
      );
      const data = await response.json();
      setResults(data.items);
    } catch (error) {
      console.error('Error fetching data from YouTube API', error);
    }
  };

  const addToPlaylist = async (song) => {
    // Simulate API call to add song to a playlist
    setPlaylist((prev) => [...prev, song]);
  };

  return (
    <div>
      <h1>Search YouTube Songs</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Results</h2>
      <ul>
        {results.map((item) => (
          <li key={item.id.videoId}>
            {item.snippet.title}{' '}
            <button onClick={() => addToPlaylist(item.snippet)}>Add to Playlist</button>
          </li>
        ))}
      </ul>

      <h2>My Playlist</h2>
      <ul>
        {playlist.map((song, index) => (
          <li key={index}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
