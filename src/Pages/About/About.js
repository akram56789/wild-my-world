import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <Card  style={{ width: '30rem' }}>
                <Card.Img variant="top" src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/130301476_1318671241814391_6017773467496750485_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeF8A5ab7VpEBIlcxE1cYKtiP2qP-YhEDTs_ao_5iEQNO7bBvrpqov5z0ibp8GdEoG1Ddqm5pubD4oSGHef2yn-v&_nc_ohc=3AvsPlRHaOYAX9wMzVQ&_nc_pt=1&_nc_ht=scontent.fdac5-2.fna&oh=00_AT9XDOqqaxbdRyYL92GrRAuMK-Ie72aW77sjpezXc6ITWQ&oe=628370A7" />
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