import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';

export const Header = props => {
    console.log(props);

    return (
        <header className={styles.subheader}>
            <Nav loginData={props.loginData} setLoginData={props.setLoginData} />
        </header>  
    )
}