import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './public/vite.svg'
import './Css/App.css'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Component/navbar';
import Register from './Page/register';
import Login from './Page/login';
import Profile from './Page/profile';
import UpdateProfile from './Page/update_profile';
import Addsong from './Page/addSong';
export default function Apps() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/Addsong" element={<Addsong />} />
        </Routes>
      </div>
    </Router>
  );
};


