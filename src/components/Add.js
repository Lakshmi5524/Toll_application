import React, { useState } from "react"
import "./add.css"
import { useNavigate } from "react-router-dom"

const Add = () => {
  const navigate = useNavigate()
  const [tollname, SetTollName] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [number, setNumber] = useState("")
  const [tarifee, setTarifee] = useState("")

  const vehicleNumber = (e) => {
    setNumber(e.target.value)
  }

  const handlevehicletype = (e) => {
    setTarifee(e.target.value)
  }

  const handleSubmit = () => {
    console.log({ tollname, vehicle, number, tarifee })

    const blogs =
      localStorage.getItem("blogs") && localStorage.getItem("blogs").length > 0
        ? JSON.parse(localStorage.getItem("blogs"))
        : []

    localStorage.setItem(
      "blogs",
      JSON.stringify([...blogs, { tollname, vehicle, number, tarifee }])
    )

    navigate("/view")
  }

  return (
    <>
      <div className="Container">
        <h1>Add New Entry</h1>
        <form>
          <label htmlFor="name">Select Toll Name*</label>
          <select
            value={tollname}
            onChange={(e) => {
              const selectfun = e.target.value
              SetTollName(selectfun)
            }}
          >
            <option value="Kappalur">Kappalur</option>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Kanjipuram">Kanjipuram</option>
            <option value="kanyakumari">kanyakumari</option>
          </select>
          <label htmlFor="name">Select Vehicle type*</label>
          <select
            value={vehicle}
            onChange={(e) => {
              const Vehicletype = e.target.value
              setVehicle(Vehicletype)
            }}
          >
            <option value="Car/Jeep/Van">Car/Jeep/Van</option>
            <option value="Car/Jeep/Van">Car/Jeep/Van</option>
            <option value="Heavy Vehicle">Heavy Vehicle</option>
            <option value="Car/Bus/van">Car/Bus/van</option>
          </select>
          <label htmlFor="name">Vehicle Number*</label>
          <input
            type="text"
            name="fullname"
            placeholder="Vehicle Number"
            value={number}
            onChange={(e) => vehicleNumber(e)}
          />
          <label htmlFor="name">Tariff*</label>
          <input
            type="text"
            name="fullname"
            placeholder="Tariff Amount"
            value={tarifee}
            onChange={(e) => handlevehicletype(e)}
          />
          <button className="btn" type="submit" onClick={handleSubmit}>
            Add Entry
          </button>
        </form>
      </div>
    </>
  )
}

export default Add
