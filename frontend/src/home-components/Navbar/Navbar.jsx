import React from "react"
import { Link } from "react-router-dom"
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navBar">
      <ul className="navBar-left">
        <Link to='/' className="home">Script</Link>
        <Link to='/books' className="books">Books</Link>
        <a className="clubs">Clubs</a>
        <a className="guide">Guide</a>
        <a className="aboutUs">About Us</a>
      </ul>
      <div className="navBar-right">
        <button className="login">
            Log in
        </button>
        <button className="signin">
            Sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar
