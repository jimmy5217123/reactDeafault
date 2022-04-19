import  { NavLink } from "react-router-dom"
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar" style={{minWidth: '250px', background: '#dddddd'}}>
            <h1>Navbar</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/highChartDemo">HighChartDemo</NavLink></li>
                {/* <li><NavLink to="/about">About</NavLink></li> */}
            </ul>
        </div>
    )
}

export default Navbar;