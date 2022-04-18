import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='about mt-5'>
            <Card   style={{ width: '30rem' }}>
                <Card.Img variant="top" src=" " />
                <Card.Body>
                    <Card.Title>Name: Akram Hossain Fahim</Card.Title>
                    <Card.Text>
                    Every human being has a desire or goal I also have a desire or goal InshaAllah in the next one year I want to be a good quality web developer I want to work for the country and the nation 
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;