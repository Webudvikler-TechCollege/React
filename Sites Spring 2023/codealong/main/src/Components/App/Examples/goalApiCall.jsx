import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const GoalList = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.mediehuset.net/sdg/goals`
      const result = await axios.get(url)
      setApiData(result.data.items)
    }
    getData()
  }, [setApiData])

  return (
    <div>
      <h1>De 17 Verdensmål</h1>
      <ul>
        {apiData &&
          apiData.map((value) => {
            return (
              <li key={value.id}>
                <Link to={`/goals/${value.id}`}>{value.title}</Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export { GoalList }
