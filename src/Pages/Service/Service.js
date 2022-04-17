import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    
    const { id, name, img, price,  discriptions } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (

        <div className='service p-4'>
        <img className='w-50 img-fluid' src={img} alt="">
            
            </img> 
          
        <div className='mt-4'>
        <h3>{name}</h3>
           <p><small>{discriptions}</small></p>
           <p>{price}</p>
           <button c onClick={()=> navigateToServiceDetail(id)} 
           className='btn-service btn btn-primary  '>Check</button>
        </div>
           
        </div >
      
    );
};

export default Service;