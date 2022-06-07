import { useRoomCode } from "../../context/RoomProvider";
import { useEffect } from "react";
import "./index.css";
import ThemaSala from "../../components/Thema/ThemaSala";
import { useAsks } from "../../context/AskProvider"

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
          {asks.map((item, index) => (<li key={index} className="perguntas-li">{item}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
