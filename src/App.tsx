import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import YearTable from "./pages/Year";
import Error from "./pages/Error";
import { NobelPrize, supportedLanguagesArray } from "./types";

function App() {
  const [nobelPrizes, setNobelPrizes] = useState<NobelPrize[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.nobelprize.org/2.1/nobelPrizes"
      );
      if (response.ok) {
        const data = await response.json();
        setNobelPrizes(data.nobelPrizes);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate replace to={"/en"} />} />
            {supportedLanguagesArray.map((lng) => (
              <React.Fragment key={lng}>
                <Route
                  path={`/${lng}`}
                  element={<Home nobelPrizes={nobelPrizes!} />}
                ></Route>
                <Route
                  path={`/${lng}/rewards/:year?`}
                  element={
                    nobelPrizes ? (
                      <YearTable nobelPrizes={nobelPrizes} />
                    ) : (
                      <div>Placeholder</div>
                    )
                  }
                />
              </React.Fragment>
            ))}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
