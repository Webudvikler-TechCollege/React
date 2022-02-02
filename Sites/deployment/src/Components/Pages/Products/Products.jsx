import { useEffect, useState } from "react"
import axios from 'axios'
import { Route, Link, useParams, useNavigate } from "react-router-dom"

const Redirect = ({ to }) => {
	let navigate = useNavigate();
	useEffect(() => {
		navigate(to);
	});
	return null;
}

export const Products = () => {
	return (
		<div className="container">
			<CategoryList />
			<Route index element={<Redirect to="/products/1" />}></Route>
				<Route path=":cat_id">
					<Route index element={<Products />} />
					<Route path=":id" element={<Products />} />
			</Route>
			<ProductList />
		</div>
	)
}


export const CategoryList = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const getCategories = async () => {
			const result = await axios.get('https://api.mediehuset.net/bakeonline/categories');
			setCategories(result.data.items);
		}
		getCategories()
	}, [setCategories])
	return (
		<ul>
			{categories.map(item => {
				return (
					<li key={item.id}>
						<Link to={`/products/${item.id}`}>{item.title}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export const ProductList = () => {
	const [productlist, setProductList] = useState([])
	const {cat_id} = useParams()

	useEffect(() => {
		const getProducts = async () => {
			const result = await axios.get(`https://api.mediehuset.net/bakeonline/categories/${cat_id}`);
			setProductList(result.data.item.products);
		}
		getProducts()
	}, [cat_id])

	return (
		<ul className="productlist">
			{productlist && productlist.map(product => {
				console.log(product);
				return (
					<li key={product.id}>
						<Link to={`/products/${cat_id}/${product.id}`}>{product.title}</Link>
					</li>
				)
			})}
		</ul>
	)
}

const ProductDetails = () => {
	const [product, setProduct] = useState({})
	const {id} = useParams()

	useEffect(() => {
		const getProductData = async () => {
			const result = await axios.get(`https://api.mediehuset.net/bakeonline/products/${id}`);
			setProduct(result.data.item);
		}
	}, [id])

	return (
		<section className="productdetails">
			{product.title}
		</section>
	)
}