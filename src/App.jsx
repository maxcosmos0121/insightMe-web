import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Home from "./views/home.jsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
