import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Ablum.css';

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
          {/* <img style={{height: '400px'}} className='w-100' src={img} alt="" />
          <h3 >{name}</h3>
          <p>Price: {price}</p>
          <p><small> </small></p> */}
         
        </div>
    
            
    
    );
};

export default Album;