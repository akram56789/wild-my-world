import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId, img} = useParams();
    return (
        <div>
             
            <h1 className='d-flex justify-content-center mb-5' >Welcome to detail:{serviceId}</h1>
         <div className='text-center'>
         <Link to='/checkout'>
                <button className='btn btn-primary mb-5'>Proceed Checkout </button>
            </Link>
         </div>
        </div>
    );
};

export default ServiceDetail;