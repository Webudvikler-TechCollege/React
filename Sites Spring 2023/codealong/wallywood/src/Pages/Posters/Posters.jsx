import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper"
import { PostersStyle } from "./Posters.style"
import axios from "axios"
import { Link, Outlet, useParams } from "react-router-dom"

const Posters = () => {
  return (
    <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
      <PostersStyle>
        <div><GenreList /></div>
        <div>
          <Outlet />
        </div>
      </PostersStyle>
    </ContentWrapper>
  )
}

const GenreList = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://localhost:4000/genre')
      setData(result.data);
    }
    getData()
  }, [setData]);

  return (
    <ul>
      {data && data.map(genre => {
        return (
          <li key={genre.id}>
            <Link to={`/posters/${genre.slug}`}>{genre.title}</Link>
            
          </li>
        )
      })}
    </ul>
  )  
}

const PosterList = () => {
  const [ data, setData ] = useState([])
  const { genre } = useParams();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `http://localhost:4000/poster/list/${genre}`
      const result = await axios.get(endpoint)
      setData(result.data);
    }
    getData()
  }, [genre]);

  return (
    <ul>
      {data && data.map(poster => {
        return (
          <li key={poster.id}>
            <Link to={`/posters/details/${poster.slug}`}>{poster.name}</Link>
          </li>
        )
      })}
    </ul>
  )

}

const PosterDetails = () => {
  const [ data, setData ] = useState([])
  const { poster } = useParams();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `http://localhost:4000/poster/details/${poster}`
      const result = await axios.get(endpoint)
      setData(result.data);
    }
    getData()
  }, [poster]);

  return (
    <div>
          {data && (
            <>
              <h2>{data.name}</h2>
              <p dangerouslySetInnerHTML={{__html: data.description}}></p>
              <img src={data.image} alt={data.name}></img>
             </>
          )}
    </div>
  )

}


export { Posters, PosterList, PosterDetails }
