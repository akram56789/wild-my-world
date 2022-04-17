import React from 'react';

const Service = ({ service }) => {
    const { id, name, img, title, discriptions } = service;
    return (

        <div>
        <img className='w-50' src={img} alt="" />
           <h1>{name}</h1>
           <p>{id}</p>
           <p>{title}</p>
           <button className='btn btn-primary'>Check</button>
           
        </div >
      
    );
};

export default Service;