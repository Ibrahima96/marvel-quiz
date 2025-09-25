import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "../Landing/Landing";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "../../App.css";
import { Welcome } from "../Welcome/Welcome";
import { Login } from "../Login/Login";
import { SignUp } from "../SignUp/SignUp";
import { ErrorPage } from "../ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Route 404 (toutes les autres adresses) */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
