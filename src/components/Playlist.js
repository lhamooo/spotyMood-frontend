import React, { useState } from 'react';
import { Card,  Button, Container, Row, Col} from 'react-bootstrap';
import alt from "../../src/black.png"


export default function Playlist({ playlist, background }) {
  const { name, songCount, internUrl, externUrl, coverImageUrl } = playlist;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  function kürzeTitel(titel, maxZeichen) {
    if (titel.length > maxZeichen) {
      // Zerlege den Titel in Wörter
      const wörter = titel.split(' ');
      // Überprüfe, ob die Länge des Titels mehr als maxZeichen ist
      while (titel.length > maxZeichen) {
        // Entferne das letzte Wort
        wörter.pop();
        // Setze den Titel neu, indem du die Wörter wieder zu einem String zusammenfügst
        titel = wörter.join(' ');
      }
  
      // Gib den gekürzten Titel zurück
      return titel.trim(); // Entferne mögliche Leerzeichen am Anfang/Ende
    }
  
    // Gib den ursprünglichen Titel zurück, falls er nicht gekürzt werden muss
    return titel;
  }
  

  return (
    <div>
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
        <Card.Title className='playlist-p'>{kürzeTitel(name, 19)}</Card.Title>
        <Card.Text>

        
            <p className="returnPlaylists">
            Number of songs: <span className="boldText">{songCount}</span>
            <br />
           
            </p>
        </Card.Text>
        <Container>
          <Row>
            <Col>
            <Button className={`${background}-button`} variant="light" href={internUrl}>open in spotify</Button>
            </Col>
          </Row>
        </Container>
        
      </Card.Body>
    </Card>
    </div>
  );
}
