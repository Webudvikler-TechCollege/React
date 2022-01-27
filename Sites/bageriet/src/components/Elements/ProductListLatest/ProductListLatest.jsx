import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import styles from './ProductListLatest.module.scss';

export const ProductListLatest = () => {

    const [apiData, setApiData] = useState([]);

    const url = "https://api.mediehuset.net/bakeonline/products";
    const getLatestProducts = async () => {
        let result = await doFetch(url);
        setApiData(result);
    }

    useEffect(() => {
        getLatestProducts();
    }, [])  

    return (
        <>
            <section className={`flex ${styles.productlist}`}>
                {apiData.items && apiData.items.map((item, i) => {                    
                    if(i < 6) {
                        return (
                            <ProductListItem key={item.id} data={item} url={`/products/${item.category_id}`} />
                        )    
                    } else {
                        return null
                    }
                })}
            </section>
        </>
    )
}