import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Estrategia from './pages/Estrategia';
import Timeline from './pages/Timeline';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Estrategia />} />
                    <Route path="/timeline" element={<Timeline />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
