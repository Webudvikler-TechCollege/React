import React, { useState, useEffect } from "react";
import { NavLink as Link, useParams, useRouteMatch } from "react-router-dom";
import { doFetch } from "../../helpers/fetch";
import Style from './productList.module.scss';

export function ProductList() {

  // Hent vores category ID parameter
  let { categoryId } = useParams();

  // Hent relativ URL fra routeMatch
  let { url } = useRouteMatch();

  const [products, setProducts] = useState([]);

  // useEffect der kører når vores categoryID ændrer sig og henter de tilsvarende produkter
  useEffect(() => {
    const getProducts = async () => {
        let productsUrl = `https://api.mediehuset.net/bakeonline/categories/${categoryId}`;
        let res = await doFetch(productsUrl);
        setProducts(res);
      };

    getProducts();

    return null
  }, [categoryId]);

  //console.log(products);

  // Returnerer alle de produkter der tilhører categoryId og laver et Link tag med et parameter (productId)
  return (
    <div className={Style.productGrid}>
      {products.item
        ? products.item.products.map((product, i) => {
            return (
              <div key={product.id}>
                <img alt={product.title} src={product.image.fullpath}></img>
                <h3>{product.title.toUpperCase()}</h3>
                <p>{product.teaser.substr(0, 80) + "..."}</p>
                <Link to={`${url}/${product.id}`}><button>SE MERE</button></Link>
              </div>
            );
          })
        : <p>Siden indlæses...</p>}
    </div>
  );
}