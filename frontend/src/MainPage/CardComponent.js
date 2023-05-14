import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Box, IconButton } from '@mui/material';
import { FavoritesButton } from '../Offers/FavoritesButton';

export const CardComponent = () => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Cessna_172E_Skyhawk_%27G-ASSS%27_%2812912164614%29.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Box flexDirection={'row'}>
        <Button variant="primary">Go somewhere</Button>
        </Box>
      </Card.Body>
    </Card>
  );
}
