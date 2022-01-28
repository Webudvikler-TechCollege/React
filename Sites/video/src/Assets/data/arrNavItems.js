import { Home } from '../../Components/Pages/Home/Home'
import { About } from '../../Components/Pages/About/About'
import { Gallery } from '../../Components/Pages/Gallery/Gallery'
import { Greeting } from '../../Components/Pages/Greetings/Greetings'
import { Login } from '../../Components/Pages/Login/Login'

const arrNavItems = [
	{
		title: 'Forside',
		path: '/',
		element: <Home />,
		display: true
	},
	{
		title: 'About',
		path: '/about',
		element: <About />,
		display: true
	},
	{
		title: 'Galleri',
		path: '/gallery',
		element: <Gallery />,
		display: true
	},
	{
		title: 'Send en hilsen',
		path: '/greetings',
		element: <Greeting />,
		display: true
	},
	{
		title: 'Login',
		path: '/login',
		element: <Login />,
		display: true
	}
]

export default arrNavItems