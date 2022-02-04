import axios from "axios"
import { useState, useEffect } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

const Products = () => {
	return (
		<>
			<CategoryList />
			<Outlet />
		</>
	)
}

const CategoryList = () => {
	const [apiData, setApiData] = useState([])

	useEffect(() => {
		const getApiData = async () => {
			const url = "https://api.mediehuset.net/bakeonline/categories";
			try {
				const result = await axios.get(url)
				setApiData(result.data.items);
			}
			catch (err) {
				console.error(err);
			}
		}
		getApiData()
	}, [setApiData])

	return (
		<>
			<h2>Produkter</h2>
			<ul>
				{apiData && apiData.map(item => {
					return (
						<li key={item.id}><NavLink to={`/products/${item.id}`}>{item.title}</NavLink></li>
					)
				})}
			</ul>
		</>
	)
}

const ProductList = () => {
	const [apiData, setApiData] = useState([])
	const { category_id } = useParams()

	useEffect(() => {
		const getApiData = async () => {
			const url = `https://api.mediehuset.net/bakeonline/categories/${category_id}`
			try {
				const result = await axios.get(url)
				setApiData(result.data.item.products);	
			} 
			catch(err) {
				console.error(err);
			}
		}
		getApiData()
	}, [category_id])

	return (
		<>
			<h2>Produkter</h2>
			<ul>
				{apiData && apiData.map(item => {
					return (
						<li key={item.id}><Link to={`/products/${category_id}/${item.id}`}>{item.title}</Link></li>
					)
				})

				}
			</ul>
		</>
	)
}

const ProductDetails = () => {
	const [apiData, setApiData] = useState({})
	const { product_id } = useParams()

	useEffect(() => {
		const getApiData = async () => {
			const url = `https://api.mediehuset.net/bakeonline/products/${product_id}`
			const result = await axios.get(url)
			console.log(result.data.item);
			setApiData(result.data.item)
		}
		getApiData()
	}, [product_id])

	return (
		<article>
		{apiData && 
			<>
				<h1>{apiData.title}</h1>
				<figure>
					<img src={apiData.image?.fullpath} alt={apiData.title} />
				</figure>
				<p>{apiData.description}</p>
			</>
		}
		</article>
	)
}

export { Products, ProductList, ProductDetails }