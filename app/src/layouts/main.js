import Navbar from '../components/navbar/Navbar'
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../router/Home'
import Form from '../router/Form'
import About from '../router/About'

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/form" element={<Form />}/>
                        <Route path="/about" element={<About />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Main;