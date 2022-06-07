import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntrarSala from "../pages/EntrarSala";
import Home from "../pages/Home";
import CriarSala from "../pages/CriarSala";
import SalaAdm from "../pages/SalaAdm";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CriarSala" element={<CriarSala />} />
        <Route path="/EntrarSala" element={<EntrarSala />} />
        <Route path="/SalaAdm" element={<SalaAdm />} />
      </Routes>
    </BrowserRouter>
  );
}
