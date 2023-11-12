import React, { useState } from 'react';
import axios from 'axios';
import Playlist from './Playlist';
import Track from './Track';
import Logo from '../spotifyLogo.png';

const TYPE = {
  PLAYLISTS: 'playlists',
  TRACKS: 'tracks',
};

export default function SpotifySearcher() {
  const [type, setType] = useState('playlists');
  const [limit, setLimit] = useState('5');
  const [mood, setMood] = useState('sad');
  const [response, setResponse] = useState('');

  function handleChange({ target }) {
    const { value, name } = target;

    if (name === 'type') {
      setType(value);
    }
    if (name === 'limit') {
      if (value > 50) {
        setLimit(50);
      } else {
        setLimit(value);
      }
    }
    if (name === 'mood') {
      setMood(value);
    }
  }

  function handleSubmit() {
    const apiUrl = `http://localhost:8080/${type}?limit=${limit}&q=${mood}`;
    axios.get(apiUrl).then((response) => {
      setResponse(response.data);
    });
  }

  const { PLAYLISTS, TRACKS } = TYPE;

  function handleRender() {
    if (type === PLAYLISTS) {
      return renderPlaylist();
    }
    if (type === TRACKS) {
      return renderTrack();
    }
    return <p> You have to enter either "playlists" or "tracks"! </p>;
  }

  function renderPlaylist() {
    const playlists = [];
    for (const playlist of response) {
      playlists.push(<Playlist key={playlist.internUrl} playlist={playlist} />);
    }
    return playlists;
  }

  function renderTrack() {
    return response.map((track) => <Track key={track.internUrl} track={track} />);
  }

  return (
    <div>
      <h1>Spotify searcher</h1>
      <img id="logo" src={Logo} alt="spotify Logo" />
      <form onSubmit={handleSubmit}>
        <label>How is your mood today? :</label>
        <input
          id="mood"
          name="mood"
          className="mood"
          type="text"
          value={mood}
          onChange={handleChange}
        />
        <label>
          <br />
          What do you want to look for?
        </label>
        <input
          id="type"
          name="type"
          className="type"
          type="text"
          value={type}
          onChange={handleChange}
        />
        <br />
        <label>How many search results do you want to get?:</label>
        <input
          id="limit"
          name="limit"
          className="limit"
          type="number"
          max={50}
          value={limit}
          onChange={handleChange}
        />
        <br />
        <input className="submitButton" type="button" value="Submit" onClick={handleSubmit} />
      </form>
      {handleRender()}
    </div>
  );
}
