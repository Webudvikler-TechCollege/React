import { Home } from '../../Components/Pages/Home/Home'
import { About } from '../../Components/Pages/About/About'
import { GoalList } from '../../Components/Pages/Goals/GoalList'
import { Login } from '../../Components/Pages/Login/Login'
import { ProductDetails, ProductList, Products } from '../../Components/Pages/Products/Products'

const arrNavItems = [
	{
		title: 'Forside',
		path: '/',
		element: <Home />,
		display: true
	},
	{
		title: 'Om os',
		path: '/about',
		element: <About />,
		display: true
	},
	{
		title: 'Verdensmål',
		path: '/goals',
		element: <GoalList />,
		display: false
	},
	{
		title: 'Produkter',
		path: '/products',
		element: <Products />,
		display: true
	},
	{
		title: 'Produkt Liste',
		path: '/products/:cat_id',
		element: <Products />,
		display: false
	},
	{
		title: 'Produkt Detaljer',
		path: '/products/:cat_id/:id',
		element: <Products />,
		display: false
	},
	{
		title: 'Login',
		path: '/login',
		element: <Login />,
		display: true
	}
]

export default arrNavItems