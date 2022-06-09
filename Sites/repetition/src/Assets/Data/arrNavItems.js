const arrNavItems = [
	{
		title: 'Forside',
		path: '/',
		display: true
	},
	{
		title: 'Dropdown',
		path: '/submenu',
		element: null,
		display: true,
		children: [
			{
				title: 'Submenu',
				path: '',
				element: null,
				display: true
			},
			{
				title: 'Comments',
				path: 'comments',
				element: null,
				display: true
			}						
		]
	},
	{
		title: 'Login',
		path: '/login',
		display: true
	}	
]

export default arrNavItems