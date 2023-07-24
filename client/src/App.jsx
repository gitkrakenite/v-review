import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Feed from "./components/Feed";
import Tips from "./components/Tips";
import Review from "./pages/Review";

function App() {
  return (
    <div className="bg-zinc-200 text-zinc-800 min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-review" element={<Create />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/review/:id" element={<Review />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
