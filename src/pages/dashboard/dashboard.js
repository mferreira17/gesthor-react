import React from 'react';
import MenuSuperior from '../../components/menu-superior/menu-superior.js';
import PesquisaDashboard from '../../components/pesquisa-dashboard/pesquisa-dashboard.js';
import Rodape from '../../components/rodape/rodape.js'

import {Container, Alert} from 'react-bootstrap'



function Dashboard() {
	return (
		<div>
			<MenuSuperior/>
			
			<Container fluid>
			
			<Alert variant="info" style={{marginTop: '2em'}}>Bem-vindo ao gestor de contratos. Comece pesquisando ou utilizando a navegação no menu superior.</Alert>
			
			</Container>
			
			<PesquisaDashboard/>
			
			<Rodape/>
			
		</div>
	);
}

export default Dashboard;