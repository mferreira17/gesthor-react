import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

function PesquisaDashboard(){
	return(
	<Container style={{paddingTop: '2em'}}>
		<Form>
			<Form.Group as={Row}>
				<Col sm={10}>
				<Form.Control type="text" placeholder="Digite o número do contrato para pesquisa" />
				</Col>
				<Col sm={2}>
				<Button variant="primary" type="submit">Pesquisar</Button>
				</Col>
			</Form.Group>
			
		</Form>
	</Container>
	);
}

export default PesquisaDashboard;