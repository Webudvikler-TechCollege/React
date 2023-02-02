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
  const { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/poster/${slug}`)
      setData(result.data);
    }
    getData()
  }, [slug]);

  return (
    <ul>
      {data && data.map(poster => {
        return (
          <li key={poster.id}>
            <Link to={`/posters/${slug}/${poster.id}`}>{poster.name}</Link>
          </li>
        )
      })}
    </ul>
  )

}

const PosterDetails = () => {
  const [ data, setData ] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/poster/${id}`)
      setData(result.data);
    }
    getData()
  }, [id]);

  return (
    <ul>
          <li>
            Plakatdetaljer            
          </li>
    </ul>
  )

}


export { Posters, PosterList, PosterDetails }
