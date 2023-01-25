import { NavLink } from "react-router-dom"
import './Navigation.scss'

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/about'>About</NavLink></li>
				<li><NavLink to='/products'>Products</NavLink></li>
				<li><NavLink to='/staffex'>Staff Example</NavLink></li>
				<li><NavLink to='/staff'>Medearbejdere</NavLink></li>
				<li><NavLink to='/form'>Form Elements</NavLink></li>
			</ul>			
		</nav>
	);
}

export default Navigation;
