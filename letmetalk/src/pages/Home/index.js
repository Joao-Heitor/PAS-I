import ThemaHome from "../../components/Thema/ThemaHome";
import { useEffect } from "react";
import logo from "../../assets/logo.svg";
import google from "../../assets/google.svg";
import portinha from "../../assets/portinha.svg";
import {  useState } from "react";
import {  NavLink } from "react-router-dom";
import "./index.css";
import { useRoomCode } from "../../context/RoomProvider";

export default function Home() {

  const [roomCode, setRoomCode] = useState("");

  const { sala } = useRoomCode();

  function salinha() {
    if (roomCode === sala.cod) return "link-entrar";
    else {
      return ("disable");
    }
  }
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div className="div-home">
      <ThemaHome />
      <div className="menu">
        <img src={logo} className="img-home-logo" />
        <div className="div-home-criar-sala">
          <NavLink to="/CriarSala" className="link-criar">
            <img src={google} className="img-home" />
            Crie sua sala com o Google
          </NavLink>
        </div>

        <p className="p-divisor">Ou entre em uma sala</p>

        <form className="form-home-entrar-sala">
          <input
            type="text"
            className="input-home-entrar-sala"
            placeholder="Digite o código da sala"
            value={roomCode}
            onChange={(event) => setRoomCode(event.target.value)}
          />

          <NavLink to="/EntrarSala" className={salinha}linkDisable>
            <img src={portinha} className="img-home" />
            Entrar na sala
          </NavLink>

        </form>
      </div>
    </div>
  );
}
