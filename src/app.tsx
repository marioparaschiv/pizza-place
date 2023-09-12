import { MemoryRouter, Routes as RoutesWrapper, Route } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Header } from '~/components';
import * as Routes from '~/routes';
import './global.scss';

function App() {

	return <MemoryRouter initialEntries={['/pizzas']}>
		<Header />
		<Paper elevation={0} id='route-body'>
			<RoutesWrapper>
				{Object.keys(Routes).map(name => {
					const { Component, path } = (Routes as Routes.Route)[name];

					return <Route path={path} key={path} element={<Component />} />;
				})}
			</RoutesWrapper>
		</Paper>
	</MemoryRouter>;
}

export default App;
