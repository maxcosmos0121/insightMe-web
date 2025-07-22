import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Home from "./views/Home";
import Profile from "./views/profile/Profile";
import Diary from "./views/diary/Diary";
import Checkin from "./views/checkin/Checkin";
import Inspiration from "./views/inspiration/Inspiration";
import Plan from "./views/plan/Plan";
import Network from "./views/network/Network";
import Water from "./views/water/Water";
import Finance from "./views/finance/Finance";
import Growth from "./views/growth/Growth";
import Health from "./views/health/Health";
import WriteDiary from './views/diary/WriteDiary';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/diary" element={<Diary/>}/>
                <Route path="/diary/write" element={<WriteDiary/>}/>
                <Route path="/checkin" element={<Checkin/>}/>
                <Route path="/inspiration" element={<Inspiration/>}/>
                <Route path="/plan" element={<Plan/>}/>
                <Route path="/network" element={<Network/>}/>
                <Route path="/water" element={<Water/>}/>
                <Route path="/finance" element={<Finance/>}/>
                <Route path="/growth" element={<Growth/>}/>
                <Route path="/health" element={<Health/>}/>
            </Routes>
        </Router>
    );
}

export default App;
