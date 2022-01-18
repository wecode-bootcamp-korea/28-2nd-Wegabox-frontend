import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import MovieList from './pages/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import Ticketing from './pages/Ticketing/Ticketing';
import MovieDetail from './pages/MovieDetail/MovieDetail';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
