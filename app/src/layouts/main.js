import Navbar from '../components/navbar/Navbar'
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Stock from '../router/Stock'
import HighChartDemo from '../router/HighChartDemo'
// import About from '../router/About'

function Main() {
    return (
        <div>
            <BrowserRouter>
                <div style={{display: 'flex'}}>
                    <Navbar></Navbar>
                    <div className="content" style={{width : '100%', minHeight: '97.5vh', height: '100%', margin: '10px'}}>
                        <Routes>
                            <Route path="/" element={<Stock />}/>
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