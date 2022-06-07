import "./index.css";
import ThemaHome from "../../components/Thema/ThemaHome";
import logo from "../../assets/logo.svg";
import {useRoomCode} from "../../context/RoomProvider"
import {  useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./index.css";

export default function CriarSala() {

  useEffect(() => {document.title = "Criar sala"})
  const { sala, setSala } = useRoomCode()

  return (
    
    <div className="criar-sala">
      <ThemaHome sala={sala.cod}/>
      <div className="menu">
        <img src={logo} className="img-home-logo" />
        <h2>Crie uma nova sala</h2>
        <form className="form-criar-sala">
          <input
            type="text"
            className="input-criar-sala"
            placeholder="Nome da sala"
            id="nome-sala"
            
          />
          
          {console.log(sala)}
          <NavLink to="/SalaAdm" className="link-criar-sala"
          onClick={(event)=>{
            const ns = document.querySelector("#nome-sala")
            setSala({name: ns.value, cod: getRandomCod(100000, 999999)})
            console.log(sala)
          }}
          >
            Criar sala
          </NavLink>
          <Outlet />
        </form>
      </div>
    </div>
  );
}

function getRandomCod(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return  `#${Math.floor(Math.random() * (max - min + 1)) + min}`;
}