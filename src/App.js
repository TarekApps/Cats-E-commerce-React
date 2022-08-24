import './App.css';
import Basket from './components/basket.js';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Main from "./components/main.js"
import About from "./components/about.js"
import {useState, useEffect} from "react"
import CatLogo from './images/cat_logo_one.png'

let Image = (props) => {
    return <img src = {props.src} alt = "CatLogo"></img>
}

function App() {
    const [show, setShow] = useState(false)
    const [basket, setBasket] = useState([])
    const [prices, setPrices] = useState([])
    
    return (
        <div>
            <BrowserRouter>
            <nav>
                <div className='header'>
                    <Image src = {CatLogo}/>
                    <h1>Cats4Lyf</h1>
                </div>
                
                <div className='navLinks'>
                    <Link className='navLink1' to="/cats-4-lyf-project/" >Home</Link>
                </div>
                <div className='navLinks'>
                    <Link className='navLink2' to="/about" >About</Link>
                </div>
                <div className='navButton'>
                    <button  id="open-button" onClick={() => setShow(true)}>Basket</button>
                </div>
                
                <Basket title="Basket" onClose={() => setShow(false)} show={show} basket={basket} setBasket={setBasket}/>
            </nav>
            <Routes>
                <Route path="/cats-4-lyf-project/" element={<Main basket={basket} setBasket={setBasket}/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
