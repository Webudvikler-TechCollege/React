import React from 'react'

import Slide1 from '../../assets/slide1.jpg'
import Slide2 from '../../assets/slide2.jpg'
import Slide3 from '../../assets/slide3.jpg'
import Carousel from 'react-material-ui-carousel'
import Style from './slider.module.scss'


export function Slider() {

    // Opret et array med en række objecter til vores carousel
    const carouselItems = [
        {
            url: Slide1,
            description: "Vi elsker at lave brød",
            alt: "vi_elsker_brød"
        },
        {
            url: Slide2,
            description: "Brød er håndværk",
            alt: "Brød_er_håndværk"
        },
        {
            url: Slide3,
            description: "Brød bagt med sjæl",
            alt: "Brød_bagt_med_sjæl"
        },
    ]

    // Opret et nyt component vi kalder Item som returnerer hvert item i vores carousel
    function Item(props) {
        return (
            <div className={Style.slide} style={{ Height: "65vh" }}>
                <h3>{props.item.description}</h3>
                <img alt={props.item.alt} width="100%" src={props.item.url} />
            </div>
        )
    }

    // Returner fra slideren en carousel, med et for loop (map) der spytter vores carouselItems tilbage som <Item> components
    return (
        <>
            <Carousel animation="fade" interval="5000">
                {
                    carouselItems.map((item, index) => {
                        return (
                            <Item key={index} item={item} />
                        )
                    })
                }
            </Carousel>
        </>
    )
}