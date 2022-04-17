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
    <Card className="bg-dark text-white">
  <Card.Img src={img} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>
        <h1 className='text-center '>{name}</h1>
    </Card.Title>
    <Card.Text>
     <h1 className='text-center'>${price}</h1>
    </Card.Text>
    <Card.Text> </Card.Text>
  </Card.ImgOverlay>
  <button c onClick={()=> navigateToServiceDetail(id)} 
className='btn-service btn btn-primary  '>Check</button>
</Card>


        </div>

        // <div className='service p-4 mb-4'>
        // <img className='w-50  ' src={img} alt="">
            
        //     </img> 
          
        // <div className='mt-4'>
        // <h3>{name}</h3>
        //    <p><small>{discriptions}</small></p>
        //    <p>{price}</p>
         
        // </div>
           
        // </div >
      
    );
};

export default Service;








{/* <button c onClick={()=> navigateToServiceDetail(id)} 
className='btn-service btn btn-primary  '>Check</button> */}