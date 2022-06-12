import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';

const Shop = () => {
	return <h1>Shop</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
