import { NavLink } from "react-router-dom";
import windmill from "./windmill.json"

const NavBar = () => {
	return (
		<section id='sidebar'>
        <nav>
            <ul>
              <li><NavLink to="/">Forside</NavLink></li>
            {windmill.map(function(item, index){
                    return <li key={index}><NavLink to={`/${index}`}>{item.Møllenummer}</NavLink></li>;
                  })}
            </ul>
        </nav>
    </section>
	);
}

export default NavBar;
