import React from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';


export default function Track({ track }) {
  const { name, artist, length, internUrl, externUrl } = track;

  return (
    <div className='card-wrapper'>

<Card className='card'>
<Card.Body>
  <Container className='container-card'>
    <Row>
      <Col >
      <p className='playlist-p'> 
      {name}
      <br />
      <br />
      </p>
      <p className="returnTracks">
      Artist: <span className="greenText">{artist}</span>
      <br />
      <br />
      Length of song: <span className="greenText">{length }</span>
      <br />
      <br />
      Open in Spotify: <a href={internUrl}>{internUrl}</a>
      <br />
      <br />
      Open in browser: <a href={externUrl}>{externUrl}</a>
      <br />
      <br />
      </p>
      </Col>
    </Row>
  </Container>
</Card.Body>
</Card>
</div>
  );
}
