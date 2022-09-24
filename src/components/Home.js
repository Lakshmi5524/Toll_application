import React, { useState } from "react"
import { Users } from "../Data"
import "./home.css"

import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const [data, Setdata] = useState(Users)
  const [search, setSearch] = useState("")
  //const [sorted, setSorted] = useState({ sorted: "id", reversed: false })

  const searchfun = (e) => {
    const matchUsers = Users.filter((item) => {
      return `${item.vehicletype}`
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    })
    Setdata(matchUsers)
    setSearch(e.target.value)
  }

  //const sortByName = () => {
  //  const usersCopy = [...users]
  //  usersCopy.sort((userA, userB) => {
  //    const fullNameA = `${userA.first_name} ${userA.last_name}`
  //    const fullNameB = `${userB.first_name} ${userB.last_name}`
  //    if (sorted.reversed) {
  //      return fullNameB.localeCompare(fullNameA)
  //    }
  //    return fullNameA.localeCompare(fullNameB)
  //  })
  //  setUsers(usersCopy)
  //  setSorted({ sorted: "name", reversed: !sorted.reversed })
  //}

  return (
    <>
      <div className="head">
        <h3>Toll Entries /Vehicle entries</h3>
        <div className="search_container">
          <input
            type="text"
            placeholder="Search.."
            value={search}
            onChange={searchfun}
          />
        </div>

        <button
          className="add"
          onClick={() => {
            navigate("/add")
          }}
        >
          Add New Toll
        </button>

        <button
          className="add"
          onClick={() => {
            navigate("/view")
          }}
        >
          View New Toll
        </button>
      </div>
      <div classNameName="app-container">
        <table>
          <thead>
            <tr>
              <th>VEHICLETYPE</th>
              <th>VEHICLENUMBER</th>
              <th>DATE/TIME</th>
              <th>TOLLNAME</th>
              <th>TARIFF</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.vehicletype}</td>
                <td>{item.vehiclenumber}</td>
                <td>{item.date}</td>
                <td>{item.tollname}</td>
                <td>{item.tariff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
