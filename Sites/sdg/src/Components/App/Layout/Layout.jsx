import { useEffect } from "react"

const Page = props => {
	useEffect(() => {
		document.title = props.title
		if (props.description) {
			document.querySelector('meta[name="description"]')
				.setAttribute("content", props.description)
		}
	}, [props.title, props.description])

	return (
		<>
			<h1 className="text-xl font-bold">{props.title}</h1>
			{props.subtitle && (
				<h2 className="text-lg">{props.subtitle}</h2>
			)}
			<ContentWrapper>{props.children}</ContentWrapper>
		</>
	)
}

const ContentWrapper = props => {
	return (
		<div className="container">
			{props.children}
		</div>
	)
}

export { Page, ContentWrapper }
