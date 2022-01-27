import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
import { NavLink as Link, useRouteMatch } from 'react-router-dom';
import styles from './ProductNav.module.scss';

export const ProductNav = () => {

    const [prodList, setProdList] = useState([]);
    let { url } = useRouteMatch();

    useEffect(() => {
        const url = "https://api.mediehuset.net/bakeonline/categories";

        const getProdList = async () => {
            const result = await doFetch(url);
            setProdList(result);
        }
    
        getProdList();
    }, [])

    return (
        <nav className={styles.productnav}>
            <ul className={styles.categories}>
                {
                    prodList.items && prodList.items.map((category, index) => { 
                        return <li key={index}>
                                    <Link activeStyle={{fontWeight: "bold"}} to={`${url}/${category.id}`}>
                                        {category.title}</Link>
                                </li>
                    })
                }
            </ul>
        </nav>
    )
}