import { useRoomCode } from "../../context/RoomProvider";
import { useEffect } from "react";
import ThemaSala from "../../components/Thema/ThemaSala";
import "./index.css";
import { useAsks } from "../../context/AskProvider"
import { useState } from "react";
import {  NavLink } from "react-router-dom";

export default function EntrarSala(props) {

  const { sala } = useRoomCode(); 
  const [ask, setAsk] = useState("");
  const { asks, setAsks } = useAsks()

  useEffect(() => {
    document.title = sala.name;
  });
  return (
    <div className="div-Entrar-sala">
      <ThemaSala hidden="hidden" sala={sala.cod} />
      <div className="div-content">
        <h2>{sala.name}</h2>
        <form className="form-pergunta">
          <input
            type="text"
            placeholder="O que você quer perguntar?"
            className="pergunta"
            onChange={(e) => setAsk(e.target.value)
            }
          />
          <div className="div-perguntas">
            <span className="span-pergunta">
              Para enviar uma pergunta, <a href="#">faça login.</a>
            </span>
            <button className="button-pergunta" onClick={(e)=>{
              e.preventDefault()
              if (ask){
                setAsks([...asks, ask]);
                setAsk("");
                const p = document.querySelector(".pergunta")
                p.value=""
            }
            }}> Enviar pergunta</button>
          </div>
        </form>
        <div className="perguntas">
          <ul className="perguntas-ul">
             {asks.map((item, index) => (<li key={index} className="perguntas-li">{item}</li>))}
          </ul>
        </div>
      </div>
      <NavLink to="/SalaAdm" className="ser-adm">
            adm
          </NavLink>
    </div>
  );
}
