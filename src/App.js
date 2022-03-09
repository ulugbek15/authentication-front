import './App.css';
import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import Private from './Pages/Private';
import Public from './Pages/Public';

function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<Private />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path="/" element={<Public />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>


      </Routes>

    </>
  );
}

export default App;