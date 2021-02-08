import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router , Link} from 'react-router-dom';


function LoginButton() {
	return(
		<i className="bi bi-person-fill"></i>
	);
}

function MenuSuperior(){
	
	return (
		<Router>
		<Navbar expand="lg" bg="dark" variant="dark">
			<Navbar.Brand>Gesthor</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbar-nav-menusuperior" />
			<Navbar.Collapse>
			  <Nav className="mr-auto">
				<NavDropdown id="navbar-nav-menusuperior" title="Contratos">
					<NavDropdown.Item>
						<Link style={{color:'black', textDecoration:'none'}} to="/novo">
						&nbsp;
						<i className="bi bi-file-plus" style={{textIndent:'center'}}></i>
							Novo Contrato 
						</Link>
					</NavDropdown.Item>
				</NavDropdown>
				<NavDropdown id="navbar-nav-menusuperior" title="Ocorrências">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				</NavDropdown>
				</Nav>
				<Nav>
					<Link to="/sobre"><LoginButton/></Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</Router>
	);
	
}

export default MenuSuperior;
