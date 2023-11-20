import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import YearTable from './pages/Year';
import Error from './pages/Error';
import { NobelPrize } from './types';


function App() {
  const [nobelPrizes, setNobelPrizes] = useState<NobelPrize[]>();


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.nobelprize.org/2.1/nobelPrizes");
      if (response.ok) {
        const data = await response.json();
        setNobelPrizes(data.nobelPrizes);
      }
    }

    fetchData()
      .catch(console.error);
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/rewards" element={<SharedLayout />}>
            <Route index element={<Home nobelPrizes={nobelPrizes!} />} /> {/* not sure if this should be the initial path */}
            <Route path="/rewards/:locale" element={<Home nobelPrizes={nobelPrizes!} />}/>
            <Route path="/rewards/:locale/:year" element={<YearTable nobelPrizes={nobelPrizes!}/>} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
