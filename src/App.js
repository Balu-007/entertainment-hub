import { Container } from '@material-ui/core';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Route, Routes } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Trending from './Pages/Trending/Trending';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
