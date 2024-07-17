import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


const Layout=()=>{
    return(
        <>
<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link  as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link  as={Link} to="display">Display</Nav.Link>
            <Nav.Link  as={Link} to="search">Search</Nav.Link>
            <Nav.Link  as={Link} to="update">Update</Nav.Link>
            <Nav.Link  as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
     <div id="container">

     <Outlet/>
          
     </div>      
 
    <div className="footer">
    </div>

        </>
    )
}

export default Layout;
