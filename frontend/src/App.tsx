import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AddUser from './Pages/AddUser';
import EditUser from "./Pages/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Home />}/>
          <Route path="/edituser/:id" element={<EditUser />}/>
          <Route path="/adduser" element={<AddUser />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
