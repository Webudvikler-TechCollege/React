//import styles from "./Header.module.scss";
import { Nav } from '../Nav/Nav';
import { Slider } from '../../Elements/Slider/Slider'

export const HeaderFrontpage = (props) => {
    return (
        <header>
            <Nav />
            <Slider />
        </header>  
    )
}