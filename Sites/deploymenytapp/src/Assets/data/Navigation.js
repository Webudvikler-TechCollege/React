import { About } from "../../Components/Pages/About/About";
import { Contact } from "../../Components/Pages/Contact/Contact";
import { Home } from "../../Components/Pages/Home/Home";

const arrNav = [
	{
		name: 'Forside',
		path: '/',
		element: <Home />
	},
	{
		name: 'Om os',
		path: '/about',
		element: <About />
	},
	{
		name: 'Kontakt',
		path: '/contact',
		element: <Contact />
	}
]