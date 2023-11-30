import React, { useState } from 'react';
import axios from 'axios';
import Playlist from './Playlist';
import Track from './Track';
import Logo from '../spotifyLogo.png';
import {Button, Container, Form, Row, Col} from 'react-bootstrap';



const TYPE = {
  PLAYLISTS: 'playlists',
  TRACKS: 'tracks',
};

export default function SpotifySearcher() {
  const [type, setType] = useState('playlists');
  const [limit, setLimit] = useState('5');
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState('');
  const [background, setBackground] = useState('home')

  document.body.className = background;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll-Verhalten (sanft)
    });
  };

  function handleChange({ target }) {
    const { value, name } = target;

    

    if (name === 'type') {
      setType(value);
    }
    setLimit(50)
    if (name === 'mood') {
      setMood(value);
    }
  }

  function handleSubmit() {
    setBackground(mood)
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
      playlists.push(<Playlist key={playlist.internUrl} playlist={playlist} background={background} />);
    }
    
    const groupsOfThree = [];
    for (let i = 0; i < playlists.length; i += 4) {
    groupsOfThree.push(playlists.slice(i, i + 4));
  }

  const cardRows = groupsOfThree.map((group, index) => (
    <Row key={index} className="mb-4">
      {group.map((card, i) => (
        <Col key={i} sm={3} className='card-col'> 
          {card}
        </Col>
      ))}
    </Row>
  ));
    return (
      <Container className='small-cards'>
        {cardRows}
      </Container>
    );
  }

  function renderTrack() {
    const tracks = [];
    for (const track of response) {
      tracks.push(<Track key={track.internUrl} track={track} />);
    }
    return tracks;
  }

  return (
    <div className='body'>
      <h1 className='logo-font'>SpotyMood</h1>

      <Form className="d-flex justify-content-center align-items-center flex-column"> 
      <Form.Label className='howMood'>How is your mood today?</Form.Label>

      <Form.Select aria-label="Default select example" onChange={handleChange} id='mood' name='mood' className='mood'value={mood}>
      <option></option>
      <option value="happy">Happy</option>
      <option value="sad">Sad</option>
      <option value="exited">Excited</option>
      <option value="anxious">Anxious</option>
      <option value="calmed">Calmed</option>
      <option value="confused">Confused</option>
      <option value="hopeful">Hopeful</option>
    </Form.Select>
      <br />

    
      <Form className={`${background}-custom-radio d-flex justify-content-between`}> 
        <Form.Check
          type="radio"
          label="Tracks"
          name="type"
          value="tracks"
          onChange={handleChange}
        />
        <Form.Check
          className="playlist-radio"
          type="radio"
          label="Playlists"
          name="type"
          value="playlists"
          onChange={handleChange}
        />
      </Form>
      <br />
        <Button className={`${background}-button-submit`} variant="light" value="Submit" onClick={handleSubmit}>Submit</Button>
      </Form>

    {background==="home"?<></>:<Button className={`${background}-scroll-to-top-button`} variant="light" onClick={scrollToTop}>
     <span class="material-symbols-outlined">
      expand_less
      </span>
      </Button>}     

      <br />
      <br />
      {handleRender()}
    </div>
  );
}
