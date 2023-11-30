import React, { useState } from 'react';
import { Card,  Button, Container, Row, Col} from 'react-bootstrap';
import alt from "../../src/black.png"


export default function Playlist({ playlist, background }) {
  const { name, songCount, internUrl, externUrl, coverImageUrl } = playlist;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  

  return (
    <div>

      {/* <Card className='card'>
      <Card.Body>
        <Container className='container-card'>
          <Row>
            <Col xs={3}>
            <Image className="image-cover" id="image-cover" src={coverImageUrl} alt="Cover" rounded/>
            </Col>

            <Col xs={9}>
            <p className='playlist-p'> 
            {name}
            <br />
            <br />
            </p>
            <p className="returnPlaylists">
            Number of songs: <span className="greenText">{songCount}</span>
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
    */}

    <Card style={{ width: '18rem' }} className={`${background}-card`}>
    {imageError ? (
        <Card.Img
          variant="top"
          src={alt}
          className="image-cover"
          id="image-cover"
          alt="Alternatives Bild"
        />
      ) : (
        <Card.Img
          variant="top"
          src={coverImageUrl}
          className="image-cover"
          id="image-cover"
          alt="cover"
          onError={handleImageError}
        />
      )}
      <Card.Body>
        <Card.Title className='playlist-p'>{name}</Card.Title>
        <Card.Text>

        
            <p className="returnPlaylists">
            Number of songs: <span className="boldText">{songCount}</span>
            <br />
           
            </p>
        </Card.Text>
        <Container>
          <Row>
            <Col>
            <Button className={`${background}-button`} variant="light" href={internUrl}>spotify</Button>
            </Col>
            <Col>
            <Button className={`${background}-button`} variant="light" href={internUrl}>browser</Button>
            </Col>
          </Row>
        </Container>
        
      </Card.Body>
    </Card>
    </div>
  );
}
