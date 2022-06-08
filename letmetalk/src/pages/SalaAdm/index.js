import { useRoomCode } from "../../context/RoomProvider";
import { useEffect } from "react";
import "./index.css";
import ThemaSala from "../../components/Thema/ThemaSala";
import { useAsks } from "../../context/AskProvider"
import b from "../../assets/excluir.svg"
export default function SalaAdm() {

  const { sala, setSala } = useRoomCode();
  const { asks, setAsks } = useAsks()
  useEffect(() => {
    document.title = `${sala.name}`;
  });

  return (
    <div>
      <ThemaSala sala={sala.cod} encerrar={() =>{ 
        setSala("") 
        setAsks("")
        }}/>

      <div className="div-content">
        <h2>{sala.name} </h2>
        <div className="perguntas">
          <ul className="perguntas-ul">
          {asks.map((item, index) => (<li id={index} className="perguntas-li">{item}
          <button id={index} className="button-excluir" onClick={() => {
            const b = document.querySelector(".button-excluir")
            const l = document.querySelector(".perguntas-li")
            if(b.id === l.id){
              l.remove()
            }
          }}> <img src={b} className="img-excluir" alt="excluir" /></button>
          </li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
