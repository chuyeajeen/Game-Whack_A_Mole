import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Game from "../pages/game";
import Landing from "../pages/landing";
const RouterComponent = () => {
    return (
            <Routes>
                <Route path="/game" element={<Game />} />
                <Route path="/" element={<Landing />} />
            </Routes>
    );
};

export default RouterComponent;
