import './App.css';
import MyContainer from "./components/MyContainer";
import Header from "./components/Header";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
    return ( 
        <Router>
            <div className = "App" >
            
                <Routes>
                    <Route path="/about" element={ <> <Header/> <About/> </> } />
                    <Route path="/" element={ <> <Header/> <MyContainer/> </> }/>
                </Routes>
            </div >
        </Router>
    );
}

export default App;