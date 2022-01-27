import { Link } from 'react-router-dom';
import styles from "./Nav.module.scss";

export const Nav = props => {

    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Forside</Link></li>
                <li><Link to="/products">Produkter</Link></li>
                <h2 className={styles.logo}>bageriet</h2>
                <li><Link to="/contact">Kontakt</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}