import { useEffect } from "react"
import { useRef } from "react"

const DOMElement = () => {
	const htmlElement = useRef()

	useEffect(() => {
		console.log(htmlElement.current);
	}, [])

	return (
		<div>
			<button ref={htmlElement} value="Test">Test</button>
		</div>
	)
}

export default DOMElement