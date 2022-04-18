import React from 'react';
import { Button, Card } from 'react-bootstrap';
 

const Album = ({album}) => {
    const {  name, img, price  } = album;
    return (
         
     <div className='album'>

<Card style={{ width: '18rem' }}>
  <Card.Img style={{height: '300px'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Price:${price}
    </Card.Text>
    <Button variant="primary">Buy Now</Button>
  </Card.Body>
</Card>
          
         
        </div>
    
            
    
    );
};

export default Album;