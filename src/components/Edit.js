import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Edit = () => {
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

  const handleEdit = () => {
    console.log({ tollname, vehicle, number, tarifee })
    let blogs =
      localStorage.getItem("blogs") && localStorage.getItem("blogs").length > 0
        ? JSON.parse(localStorage.getItem("blogs"))
        : []

    const _blogs = blogs.map((blog, indexs) => {
      if (indexs == localStorage.getItem("editIndex")) {
        return { tollname, vehicle, number, tarifee }
      } else {
        return blog
      }
    })
    console.log(_blogs)
    localStorage.setItem("blogs", JSON.stringify(_blogs))
    navigate("/view")
  }
  return (
    <>
      <div className="Container">
        <h1>Edit Toll</h1>
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
          <button onClick={handleEdit}>SUBMIT</button>
        </form>
      </div>
    </>
  )
}

export default Edit
