import React, { useState, useEffect } from 'react';

const Addsong = () => {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [linkSong, setLinkSong] = useState('');
  const [songTypeId, setSongTypeId] = useState('');
  const [songs, setSongs] = useState([]); // State to store all songs
  const [selectedSongId, setSelectedSongId] = useState(null); // State to store the selected song ID for deletion

  // Fetch all songs from the server
  const fetchAllSongs = async () => {
    try {
      const response = await fetch('http://localhost:5555/api/users/song/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSongs(data);
      } else {
        console.error('Error fetching songs');
        alert('Error fetching songs');
      }
    } catch (err) {
      console.error('Error fetching songs', err);
      alert('Error fetching songs');
    }
  };

  // Add a new song
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Récupérer le token

    try {
      const response = await fetch('http://localhost:5555/api/users/song/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Ajouter le token dans l'en-tête Authorization
        },
        body: JSON.stringify({
          SongName: songName,
          Artist: artist,
          LinkSong: linkSong,
          SongTypeID: songTypeId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Song added successfully:', data);
        alert('Song added successfully!');
        // Réinitialiser les champs du formulaire après l'ajout
        setSongName('');
        setArtist('');
        setLinkSong('');
        setSongTypeId('');
        // Refresh the song list after adding
        fetchAllSongs();
      } else {
        console.error('Error adding song');
        alert('Error adding song');
      }
    } catch (err) {
      console.error('Error adding song', err);
      alert('Error adding song');
    }
  };

  // Delete a song
  const handleDelete = async () => {
    if (!selectedSongId) {
      alert('Please select a song to delete.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5555/api/users/song/${selectedSongId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Song deleted successfully');
        alert('Song deleted successfully!');
        // Refresh the song list after deletion
        fetchAllSongs();
        setSelectedSongId(null); // Reset the selected song ID
      } else {
        console.error('Error deleting song');
        alert('Error deleting song');
      }
    } catch (err) {
      console.error('Error deleting song', err);
      alert('Error deleting song');
    }
  };

  // Load songs when component mounts
  useEffect(() => {
    fetchAllSongs();
  }, []);

  return (
    <div className="add-song-container">
      <h1>Add a New Song</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="songName">Song Name:</label>
          <input
            type="text"
            id="songName"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkSong">Link to Song:</label>
          <input
            type="url"
            id="linkSong"
            value={linkSong}
            onChange={(e) => setLinkSong(e.target.value)}
            required
          />
        </div>
      
        <button type="submit">Add Song</button>
      </form>

      <h2>All Songs</h2>
      <span>Select a music and THEN click on delete </span>
      <ul>
        {songs.map((song) => (
          <li key={song.SongID} onClick={() => setSelectedSongId(song.SongID)}>
            {song.SongName} by {song.Artist} (ID: {song.SongID})
          </li>
        ))}
      </ul>

      <button onClick={handleDelete}>Delete Song</button>
    </div>
  );
};

export default Addsong;
