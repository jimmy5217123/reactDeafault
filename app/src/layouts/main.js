import Navbar from '../components/navbar/Navbar'
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../router/Home'
import HighChartDemo from '../router/HighChartDemo'
// import About from '../router/About'

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/highChartDemo" element={<HighChartDemo />}/>
                        {/* <Route path="/about" element={<About />}/> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Main;