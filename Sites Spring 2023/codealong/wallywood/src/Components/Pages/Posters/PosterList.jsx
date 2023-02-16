import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { PosterListStyle } from "./PosterList.style"
import AddToCartButton from "../../App/Cart/AddToCartButton"
import { useCartItems } from "../../App/Providers/CartProvider"

export const PosterList = () => {
  const [data, setData] = useState([])
  const { cartItems } = useCartItems()
  let { genre } = useParams({ genre: 'drama' })

  useEffect(() => {
    const getData = async () => {
      const endpoint = `http://localhost:4000/poster/list/${genre}`
      const result = await axios.get(endpoint)
      setData(result.data)
    }
    getData()
  }, [genre])

  return (
    <PosterListStyle>
      {data &&
        data.map((poster) => {
          return (
            <div key={poster.id}>
              <figure>
                <Link to={`/posters/details/${poster.slug}`}>
                  <img src={poster.image} alt="" />
                </Link>
              </figure>
              <p>
                <Link to={`/posters/details/${poster.slug}`}>
                  {poster.name}
                </Link>
              </p>
              <p>DKK {poster.price},00</p>              
              <p>
                {cartItems.find(x => x.poster.id === poster.id) ? 
                  (<span>Denne vare ligger i kurven</span>) : 
                  (<AddToCartButton id={poster.id}>Læg i kurv</AddToCartButton>)
                }
              </p>
            </div>
          )
        })}
    </PosterListStyle>
  )
}
