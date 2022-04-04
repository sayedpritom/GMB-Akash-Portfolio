import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Reviews from './Components/About/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
