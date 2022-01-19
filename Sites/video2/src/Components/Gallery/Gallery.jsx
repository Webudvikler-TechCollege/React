import styles from './Gallery.module.scss'

export const Gallery = props => {
	console.log(props);

	return (
		<div className={styles.gallerywrapper}>
			{props && props.imageList && props.imageList.map(item => {
				return (
					<img key={item.id} src={require(`../../Assets/images/artwork/${item.image}`)} alt={item.name} />
				)
			})}
		</div>
	)
}