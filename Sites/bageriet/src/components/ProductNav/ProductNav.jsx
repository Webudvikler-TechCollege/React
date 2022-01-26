import React, { useEffect, useState } from "react";
import { NavLink as Link, useRouteMatch } from "react-router-dom";
import { doFetch } from "../../helpers/fetch";
import Style from './productNav.module.scss';

export function ProductNav() {

  // Hent den relative URL fra routeMatchHook
  let { url } = useRouteMatch();

  const [prodList, setProdList] = useState([]);

  // useEffect der henter vores produktkategorier når komponentet mounter
  useEffect(() => {
    const getProdList = async () => {
      let catUrl = "https://api.mediehuset.net/bakeonline/categories";
      let res = await doFetch(catUrl);
      setProdList(res);
    };
    
    getProdList();
  }, []);
  
  //console.log(prodList);

  // Map vores kategorier ud i navigationen, som et Link tag med en sti der indeholder ID som parameter
  return (
    <nav className={Style.productNav}>
      {prodList.items
        ? prodList.items.map((category, i) => {
            return <Link activeStyle={{fontSize: "1.05rem", fontWeight:"bold"}} key={i} to={`${url}/${category.id}`}>{category.title}</Link>;
          })
        : null}
    </nav>
  );
}
