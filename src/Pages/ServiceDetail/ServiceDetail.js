import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId, img} = useParams();
    return (
        <div>
            <img src={img} alt="" />
            <h2>Welcome to detail:{serviceId}</h2>
         <div className='text-center'>
         <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed Checkout </button>
            </Link>
         </div>
        </div>
    );
};

export default ServiceDetail;