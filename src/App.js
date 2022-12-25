import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
function App() {
  return (
    <Router>
      <div className="App w-screen h-screen flex flex-col">
        <Navbar/>
        <div className="content flex-1 bg-gray-300/20">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/add" element={<AddUser/>}></Route>
            <Route path="/view/:id" element={<ViewUser/>}></Route>
            <Route path="/edit/:id" element={<EditUser/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
