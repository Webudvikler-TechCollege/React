const Section = props => {
	return (
		<section>
			<h1>{props.pagetitle}</h1>
			{props.children}
		</section>
	)
}

export default Section