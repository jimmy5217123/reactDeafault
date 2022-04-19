import Navbar from '../components/navbar/Navbar'
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../router/Home'
import HighChartDemo from '../router/HighChartDemo'
// import About from '../router/About'

function Main() {
    return (
        <div>
            <BrowserRouter>
                <div style={{display: 'flex'}}>
                    <Navbar></Navbar>
                    <div className="content" style={{width : '100%', height: '97.9vh', margin: '10px'}}>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/highChartDemo" element={<HighChartDemo />}/>
                            {/* <Route path="/about" element={<About />}/> */}
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Main;