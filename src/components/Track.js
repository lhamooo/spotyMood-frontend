import React from 'react';

export default function Track({ track }) {
  const { name, artist, length, internUrl, externUrl } = track;

  return (
    <p className="returnTracks">
      Song name: {name}
      <br />
      <br />
      Artist: {artist}
      <br />
      <br />
      Length of song: {length}seconds
      <br />
      <br />
      Open in Spotify: <a href={internUrl}>{internUrl}</a>
      <br />
      <br />
      Open in browser: <a href={externUrl}>{externUrl}</a>
      <br />
      <br />
      <br />
      <br />
    </p>
  );
}
