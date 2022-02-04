import { useEffect } from "react";

const Page = props => {

	useEffect(() => {
		// Sætter sitets title tag
		document.title = props.title
		// Sætter sitets meta:description hvis den findes
		if(props.description) {
			document.querySelector('meta[name="description"]').setAttribute("content", props.description) 
		}

	}, [props.title, props.description]);

	return (
		<>
			<h1>{props.title}</h1>
			<ContentWrapper>{props.children}</ContentWrapper>
		</>
	)
}

const ContentWrapper = props => {
	return (
		<div className="maincontainer">
			{props.children}
		</div>
	)
}

const Paragraph = props => {
	return (
		<p className={props.cssClass}>{props.children}</p>
	)
}

export { Page, Paragraph }