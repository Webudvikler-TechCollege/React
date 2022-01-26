import { NavLink } from 'react-router-dom';
import arrNavItems from '../../../Assets/data/arrNavItems';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import styles from './About.module.scss'


export const About = () => {
	const [className, setClassName] = useState('hidden')

	const desktopNav = useMediaQuery({
		query: '(min-width: 980px)'
	})
	const mobileNav = useMediaQuery({
		query: '(max-width: 980px)'
	})

	const showBugerNav = () => {
		setClassName('visible')
	}

	return (
		<nav>
			{desktopNav &&
			<ul>
				{arrNavItems.map((item, key)=> {
					return (
						item.display ?
						<li key={key}>
							<NavLink to={item.path}>{item.title}</NavLink>
						</li>
						: null
						)
					})}
			</ul>}

			{mobileNav &&
			<>
				<button onClick={showBugerNav}>Test
					<i className="fas fa-bars"></i>
				</button>
				<ul className={`${styles.mobileNav} ${className}`}>
				{arrNavItems.map((item, key)=> {
					return (
						item.display ?
						<li key={key}>
							<NavLink to={item.path}>{item.title}</NavLink>
						</li>
						: null
						)
					})}
				</ul>
			</>
			}
		</nav>
	)
}

export const Logo = () => {
	return (
		<h2>bageriet</h2>
	)
}