import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);


  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar className='text-dark'  sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h4>🐯 Wild My World 🌎</h4>
          </Navbar.Brand>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#albums">Albums</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
             
               
            </Nav>  
            <Nav>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              {
                user ?
                  <Link to='/login'>
                    <button className='rounded-pill  mt-1' onClick={handleSignOut}>SignOut</button>
                  </Link>
                  :
                  <Nav.Link as={Link} to='/login'>
                    Login
                  </Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;