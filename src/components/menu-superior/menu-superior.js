import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function LoginButton() {
	return(
		<i className="bi bi-person-fill"></i>
	);
}

function MenuSuperior(){
	
	return (
		<Navbar expand="lg" bg="dark" variant="dark">
			<Navbar.Brand>Gesthor</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbar-nav-menusuperior" />
			<Navbar.Collapse>
			  <Nav className="mr-auto">
				<NavDropdown id="navbar-nav-menusuperior" title="Contratos">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				</NavDropdown>
				<NavDropdown id="navbar-nav-menusuperior" title="Ocorrências">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="#">
						<LoginButton/>
					</Nav.Link>
		        </Nav>
			</Navbar.Collapse>
		</Navbar>
	);
	
}

export default MenuSuperior;