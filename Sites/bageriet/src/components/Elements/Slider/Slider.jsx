import Slide1 from '../../Assets/images/slides/slide1.jpg'
import Slide2 from '../../Assets/images/slides/slide2.jpg'
import Slide3 from '../../Assets/images/slides/slide3.jpg'
import Carousel from 'react-material-ui-carousel'
import Style from './Slider.module.scss'

export function Slider(){
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
    
    function Item(props){
        return (
            <div className={Style.slider} style={{Height:"65vh"}}>
                <h2>{props.item.description}</h2>
                <img alt={props.item.alt} width="100%" src={props.item.url} />
            </div>
        )
    }

    return(
        <>
            <Carousel animation="slide" interval="5000" autoPlay={false} indicators={false}>
                {
                    carouselItems.map((item, index) => {
                    return( 
                        <Item key={index} item={item}/>
                    )
                })
                }
            </Carousel>
        </>
    )
}