import { Home } from '../../Components/Pages/Home/Home'
import { About } from '../../Components/Pages/About/About'
import { GoalList } from '../../Components/Pages/Goals/GoalList'
import { GoalDetails } from '../../Components/Pages/Goals/GoalDetails';
import { Timer } from '../../Components/Hooks/UseEffects/Timer';
import { ThreeCounts } from '../../Components/Hooks/UseEffects/ThreeCounts';
import { PropDrilling } from '../../Components/Hooks/UseContext/PropDrilling';
import { Headers } from '../../Components/Hooks/UseContext/Headers';
import { Login } from '../../Components/Hooks/UseContext/Login';
import { GreetingOnInput } from '../../Components/Hooks/UseState/GreetingOnInput';
import { Counter } from '../../Components/Hooks/UseState/Counter';
import { GreetingOnSubmit } from '../../Components/Hooks/UseState/GreetingOnSubmit';
import { GreetingWithFunction } from '../../Components/Hooks/UseState/GreetingWithFunction';
import { Products } from '../../Components/Pages/Products/Products';

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
		title: 'Produkter',
		path: '/products',
		element: <Products />,
		display: true
	},
	{
		title: 'Produkt Liste',
		path: '/:id',
		element: <Products />,
		display: false
	},
	{
		title: 'Hooks',
		path: '/hooks',
		element: null,
		display: true,
		subnav: [
			{
				title: 'Greeting',
				path: 'greeting',
				element: <GreetingOnInput />,
				display: true
			},
			{
				title: 'Greeting On Submit',
				path: 'greet_submit',
				element: <GreetingOnSubmit />,
				display: true
			},
			{
				title: 'Greeting with form',
				path: 'greet_func',
				element: <GreetingWithFunction />,
				display: true
			},			
			{
				title: 'Counter',
				path: 'counter',
				element: <Counter />,
				display: true
			},
			{
				title: 'Timer',
				path: 'timer',
				element: <Timer />,
				display: true
			},			
			{
				title: 'Button Count',
				path: 'btn_count',
				element: <ThreeCounts />,
				display: true
			},			
		]
	},	
	{
		title: 'Fetch med verdensmål',
		path: '/goals',
		element: <GoalList />,
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