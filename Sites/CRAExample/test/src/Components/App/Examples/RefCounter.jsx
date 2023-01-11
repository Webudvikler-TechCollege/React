import { useEffect, useRef, useState } from "react"

const Counter = () => {
	const [ inputVal, setInputVal ] = useState(0)
	let count = useRef(0)

	useEffect(() => {
		count.current = count.current+1
	});

	return (
		<>
			<input 
				type="text" 
				value={inputVal} 
				onChange={(e) => { setInputVal(e.target.value)}} />
			<h1>{count.current}</h1>
		</>
	)
}

export default Counter