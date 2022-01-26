import { Home } from '../../Components/Pages/Home/Home'
import { About } from '../../Components/Pages/About/About'
import { GoalList } from '../../Components/Pages/Goals/GoalList'

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
	}
]

export default arrNavItems