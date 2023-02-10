import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { PosterDetailsStyle } from "./PosterDetails.style"

export const PosterDetails = () => {
  const [ data, setData ] = useState([])
  const { poster } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/poster/details/${poster}`)
      setData(result.data);
    }
    getData()
  }, [poster]);

  return (
    <PosterDetailsStyle>
      <div>
        <figure>
          <img src={data.image} alt={data.name} />
        </figure>
      </div>
      <div>
        <h2>{data.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        <p>Mål: {data.width} x {data.height} cm</p>
        <p>Varenummer: {data.id}</p>
        <p>Pris: {data.price} DKK</p>
        <p><button>Læg i kurv</button></p>
      </div>
    </PosterDetailsStyle>
  )

}