import axios from "axios"
import { useState, useEffect } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

export const Products = () => {
	return (
		<>
			<CategoryList />
			<Outlet />
		</>
	)
}

export const CategoryList = () => {
	const [apiData, setApiData] = useState([])

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get('https://api.mediehuset.net/bakeonline/categories')
			setApiData(result.data.items);
		}		
		getData()
	}, [setApiData]);

	return (
		<ul className="productnav">
			{apiData && apiData.map(item => {
				return (
					<li key={item.id}>
						<Link to={`/products/${item.id}`}>{item.title}</Link></li>
				)
			})}
		</ul>
	)
}

export const ProductList = () => {
	const [apiData, setApiData] = useState([])
	const { cat_id } = useParams()

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(`https://api.mediehuset.net/bakeonline/categories/${cat_id}`)
			setApiData(result.data.item.products);
		}
		getData()
	}, [cat_id]);

	return (
		<ul>
			{apiData && apiData.map(item => {
				return (
					<li key={item.id}>
						<Link to={`/products/${cat_id}/${item.id}`}>{item.title}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export const ProductDetails = () => {
	const [apiData, setApiData] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(`https://api.mediehuset.net/bakeonline/products/${id}`)
			setApiData(result.data.item);
		}
		getData()
	}, [id]);

	return (
		<div className="productdetails">
			<article>
				<h1>{apiData.title}</h1>
				<p>{apiData.description}</p>
			</article>
		</div>
	)
}
