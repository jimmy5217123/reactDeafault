import  { NavLink } from "react-router-dom"
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar" style={{minWidth: '250px', background: '#dddddd'}}>
            <div style={{position: 'sticky', top: '22px'}}>
                <h1>React</h1>
                <ul>
                    <li><NavLink to="/">Stock</NavLink></li>
                    <li><NavLink to="/highChartDemo">HighChartDemo</NavLink></li>
                    <li><NavLink to="/chat">Chat</NavLink></li>
                    {/* <li><NavLink to="/about">About</NavLink></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;