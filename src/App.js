import { Link, Routes, Route, navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';

import Home from "./pages/home/home";
import Job from "./pages/job/job";

function App () {
  const [selected, setSelected] = useState('')

  let jobOpen = useNavigate()
  const routeChange = () => {
    let path = '/job'
    jobOpen(path)
  }

  function jobClick(event) {
    setSelected(event.currentTarget.id)
    routeChange()
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home jobOpen={routeChange} jobClick={jobClick} />} />
        <Route path='/job/' element={<Job selected={selected} />} />
      </Routes>
    </div>
  );
};

export default App;
