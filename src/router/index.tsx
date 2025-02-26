import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Game from '../pages/game';
import Landing from '../pages/landing';
import Ranking from '../pages/ranking';
const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/game" element={<Game />} />
      <Route path="/" element={<Landing />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
};

export default RouterComponent;
