import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Login from './views/auth/Login';
import Register from './views/auth/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
