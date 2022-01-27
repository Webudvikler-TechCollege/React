import { useRouteMatch, Link } from 'react-router-dom';
import styles from './ProductListItem.module.scss';

export const ProductListItem = props => {
    let { url } = useRouteMatch();

    if(props.url) {
        url = props.url;
    }

    return (
        <article className={styles.productitem} key={props.data.id}>
            <div style={{backgroundImage: `url(${props.data.image.fullpath})`}}></div>
            <h4>{props.data.title}</h4>
            <p>{props.data.teaser.substr(0, 140) + '...'}</p>
            <Link to={`${url}/${props.data.id}`}>Læs mere</Link>
        </article>
    ) 

}