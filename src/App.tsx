import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Year from './pages/Year';
import Error from './pages/Error';


function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/rewards" element={<SharedLayout />}>
            <Route index element={<Home />} /> {/* not sure if this should be the initial path */}
            <Route path="/rewards/:locale" element={<Home />}/>
            <Route path="/rewards/:locale/:year" element={<Year />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
