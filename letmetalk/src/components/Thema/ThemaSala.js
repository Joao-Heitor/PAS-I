import "./ThemaSala.css";
import iconeCopiar from "../../assets/iconeCopiar.svg";
import logo from "../../assets/logo.svg";
import copy from "copy-to-clipboard";
import { useRoomCode } from "../../context/RoomProvider";
import {  NavLink } from "react-router-dom";

export default function ThemaSala(props) {

    const { sala } = useRoomCode();

  return (
    <div className="div-header">
      <img src={logo} alt="logo" />

      <div className="botoes">
        <button className="copiar" onClick={() => copy(sala.cod)}>
          <img src={iconeCopiar} className="img-copiar" alt="Copiar" />
          <p className="p-header">Sala {props.sala}</p>
        </button>
        <button
          hidden={props.hidden}   
          className="encerrar"      
        >
         <NavLink to="../" onClick={props.encerrar}className="link-encerrar-sala" >
             Encerrar Sala
          </NavLink> 
        </button>
      </div>
    </div>
  );
}