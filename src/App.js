import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sellcar from "./components/Sellcar";
import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [car, setCar] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios.get("https://carbackend52.onrender.com/car/list").then((res) => setCar(res.data));
  }, [car])

  const handelse = (value) => {
    const searchCar = car.filter(item => item.car_name.toLowerCase().includes(value.toLowerCase()))
    setSearch(searchCar)
  }

  return (
    <div className="flex-row bg-[#f2f2f2] min-h-screen">
      <Router>
        <Header handelse={handelse} />
        <Routes>
          <Route path="/" element={<Home car={car} search={search} />} />
          <Route path="/sell" element={<Sellcar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
