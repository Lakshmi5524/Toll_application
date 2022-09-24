import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./view.css"

const Viewentry = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const blogs = localStorage.getItem("blogs")
    setBlogs(JSON.parse(blogs))
  }, [blogs])

  //const handleDelete = (indexs) => {
  //  const _blogs = blogs.filter((blog, blogindex) => {
  //    if (blogindex !== indexs) {
  //      return blog
  //    }
  //  })
  //  setBlogs(_blogs)
  //  localStorage.setItem("blogs", JSON.stringify(_blogs))
  //}

  const handleEdit = (index) => {
    localStorage.setItem("editIndex", index)
    navigate("/edit")
  }

  return (
    <>
      <div>
        <button
          className="btns"
          onClick={() => {
            navigate("/add")
          }}
        >
          Add
        </button>

        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th>Toll Name</th>
                <th>VehicleType</th>
                <th>Vehicle Number</th>
                <th>Tariff</th>
                <th>Events</th>
              </tr>
            </thead>
            <tbody>
              {blogs && blogs.length > 0
                ? blogs.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.tollname}</td>
                        <td>{value.vehicle}</td>
                        <td>{value.number}</td>
                        <td>{value.tarifee}</td>
                        {/*<button
                          onClick={() => handleDelete(index)}
                          className="Deletebtn"
                        >
                          Delete
                        </button>*/}

                        <button
                          onClick={() => handleEdit(index)}
                          className="Editbtn"
                        >
                          Edit View
                        </button>
                      </tr>
                    )
                  })
                : "No Data"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Viewentry
