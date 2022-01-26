import React, { useEffect, useState } from 'react'
import Style from './news.module.scss'
import { doFetch } from '../../helpers/fetch';

export function News (){

    // State til at gemme vores news object
    const [news, setNews] = useState([])

    // URL (endpoint) hvor vi henter news
    const newsUrl = 'https://api.mediehuset.net/bakeonline/news'

    // Funktion der kalder doFetch med vores URL og gemmer resultatet i state 
    const getNews = async () => {
        let res = await doFetch(newsUrl)
        setNews(res)
    }

    // En useEffect der kører når komponentet 'mounter' / indlæses
    useEffect(() => {
        getNews()
        return null
    }, [])

    return (
        <section className={Style.news}>

            <article>
                <h2>Vi skaber lækkert! brød</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, obcaecati!</p>
            </article>

            <div className={Style.newsGrid}>
               
               {/* Loop igennem vores news.news array og vis os kun de tre første entries */}
                {news.items && news.items.map((item, i) => {
                    if (i < 3){
                        return (
                            <div key={item.id} id={item.id}>
                                <img src={item.image} alt={item.title}></img>
                                <h4>{item.title}</h4>
                                <p>{item.teaser}</p>
                            </div>
                        )
                    }
                    else{
                        return null
                    }
                })}
            </div>
        </section>
    )
}