import React from 'react';

export default function Playlist({ playlist }) {
  const { name, songCount, internUrl, externUrl, coverImageUrl } = playlist;

  return (
    <div>
      <p className="returnPlaylists">
        Playlist name: {name}
        <br />
        <br />
        Number of songs: {songCount}
        <br />
        <br />
        Open in Spotify: <a href={internUrl}>{internUrl}</a>
        <br />
        <br />
        Open in browser: <a href={externUrl}>{externUrl}</a>
        <br />
        <br />
      </p>
      <img className="cover" id="cover" src={coverImageUrl} alt="Cover" />
      <br />
      <br />
    </div>
  );
}
