import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <Card  style={{ width: '30rem' }}>
                <Card.Img variant="top" src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/130301476_1318671241814391_6017773467496750485_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeF8A5ab7VpEBIlcxE1cYKtiP2qP-YhEDTs_ao_5iEQNO7bBvrpqov5z0ibp8GdEoG1Ddqm5pubD4oSGHef2yn-v&_nc_ohc=3AvsPlRHaOYAX9wMzVQ&_nc_pt=1&_nc_ht=scontent.fdac5-2.fna&oh=00_AT9XDOqqaxbdRyYL92GrRAuMK-Ie72aW77sjpezXc6ITWQ&oe=628370A7" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam et distinctio accusantium explicabo nihil? Aliquid recusandae harum tempore, consectetur magnam repudiandae quaerat autem magni distinctio tempora ut consequuntur tenetur iste dicta nobis, ipsa culpa dolor exercitationem soluta mollitia corrupti! Animi beatae reiciendis libero neque natus saepe dignissimos, doloribus voluptatibus veritatis distinctio nostrum cum similique, reprehenderit veniam soluta incidunt laudantium iste voluptatum, a molestiae! Temporibus dicta,  
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;