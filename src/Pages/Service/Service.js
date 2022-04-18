import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    
    const { id, name, img, price,  discriptions } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (

        <div>
    <Card className="    ">
  <Card.Img className='animal-img'  style={{height: '400px'}} src={img} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>
        <h1 className='service-name text-center text-white'>{name}</h1>
    </Card.Title>
    <Card.Text>
     {/* <h1 className='text-center text-white'>${price}</h1> */}
    </Card.Text>
    
  </Card.ImgOverlay>
  <Card.Text> 
        <h4 className='p-2'>Price: ${price}</h4>
          <p className='p-2'>{discriptions.slice(50, 200)}</p>
         </Card.Text>

 
</Card>
<button style={{height: '50px'}} onClick={()=> navigateToServiceDetail(id)} 
className='btn-service btn-secondary w-100   '>Check Out 👉👉 </button>


        </div>

         
      
      
    );
};

export default Service;








{/* <button c onClick={()=> navigateToServiceDetail(id)} 
className='btn-service btn btn-primary  '>Check</button> */}