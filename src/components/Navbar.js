import React from 'react'
import { Link } from 'react-router-dom'
import newsLogo from '../images/logo.png'

export default function Navbar () {
    return (
      <div>
      {/* --------------------Country NavBar----------------- */}
      <header className="d-flex justify-content-center py-2">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/unitedstates" className="nav-link"> <img src="https://flagicons.lipis.dev/flags/4x3/us.svg" width="40" height="34" className="rounded" alt="..."/></Link></li>
        <li className="nav-item"><Link to="/france" className="nav-link"> <img src="https://flagicons.lipis.dev/flags/4x3/fr.svg" width="40" height="34" className="rounded" alt="..."/></Link></li>
        <li className="nav-item"><Link to="/india" className="nav-link"> <img src="https://flagicons.lipis.dev/flags/4x3/in.svg" width="40" height="34" className="rounded" alt="..."/></Link></li>
        <li className="nav-item"><Link to="palestine" className="nav-link"> <img src="https://flagicons.lipis.dev/flags/4x3/ae.svg" width="40" height="34" className="rounded" alt="..."/></Link></li>
        <li className="nav-item"><Link to="newzealand" className="nav-link"> <img src="https://flagicons.lipis.dev/flags/4x3/nz.svg" width="40" height="34" className="rounded" alt="..."/></Link></li>
      </ul>
    </header>

     {/* ----------------------NavBar-------------------- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  p-2">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={newsLogo} width="140"  alt="..."/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse px-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:"1.3rem"}}>
        <li className="nav-item px-2"  >
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown px-2">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/general">General</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
          </ul>
        </li>
        </ul>
    </div>
  </div>    
</nav>

      </div>
    )
  }



