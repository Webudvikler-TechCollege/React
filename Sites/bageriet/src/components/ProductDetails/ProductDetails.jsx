import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doFetch } from "../../helpers/fetch";
import Style from './productDetails.module.scss';

export function ProductDetails(props) {

  // Hent vores produktID parameter fra URL
  let { productId } = useParams();

  const [product, setProduct] = useState([]);

  // useEffect der henter vores produkts detaljer når productId ændrer sig
  useEffect(() => {
    const getProductDetails = async () => {
      let productUrl = `https://api.mediehuset.net/bakeonline/products/${productId}`;
      let res = await doFetch(productUrl);
      setProduct(res);
    };

    getProductDetails();
  }, [productId]);

  console.log(product);

  // Returnerer produktet
  return product.item ? (
    <>
    <div key={product.item.product_id} className={Style.product}>
      <article>
        <h2>{product.item.title.toUpperCase()}</h2>
        <img src={product.item.image.fullpath} alt={product.item.title}></img>
        <p>{product.item.description}</p>
      </article>
      <aside>
        <h3>Ingredienser</h3>
        {product.item.ingredients.map((item, i) => {
          return (
          <div key={i}>
            <p>{item.amount} {item.unit_abbr} {item.ingredient_title}</p>
          </div>
          )
        })}
      </aside>
    </div>
  </>
  ) : (
    <p>Siden indlæses...</p>
  );
}
