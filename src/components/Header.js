import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

function Header() {
  //const navigate = useNavigate()
  return (
    <div className="container">
      <div className="row">
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGyFJf7eoUp_qwXqEnuIC50x6yqflTAd1j128l_U7m_PXW4Xu-ft-n3nOlR6f2RyJ0Q&usqp=CAU.png" />
        </Link>
      </div>
    </div>
  )
}

export default Header
