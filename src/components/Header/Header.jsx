import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuopen, setMenuopen] = useState(false)
  return (
    <div>
      <nav>
        <Link to='/' className='nav-title'>Krishna</Link>
        <div className='menu' onClick={()=>{setMenuopen(!menuopen)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuopen ? "open" : ""} >
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href='#Projects'>Projects</a>
          </li>
          <li>
            <a href='#Contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
