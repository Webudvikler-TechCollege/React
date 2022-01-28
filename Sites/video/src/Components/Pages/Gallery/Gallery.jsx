import styles from './Gallery.module.scss'

const arrImages = [
    /*
    { 
      id: 1,
      image: 'https://api.mediehuset.net/images/sdg/photos/1.jpg', 
      name: 'Afskaf fattigdom'
    },
    { 
      id: 2,
      image: 'https://api.mediehuset.net/images/sdg/photos/2.jpg', 
      name: 'Stop sult'
    },
    */
    { 
      id: 3,
      image: 'art1-foto-colourbox.jpg', 
      name: 'Test'
    }
]


export const Gallery = props => {
	console.log(props);

	return (
		<div className={styles.gallerywrapper}>
			{props && props.imageList && props.imageList.map(item => {
				return (
					<img key={item.id} src={require(`../../../Assets/images/artwork/${item.image}`)} alt={item.name} />
				)
			})}
		</div>
	)
}