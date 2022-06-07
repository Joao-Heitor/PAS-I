import imgem_tela1 from "../../assets/imagem_tela1.svg";
import "./ThemaHome.css";

export default function ThemaHome() {
  return (
    <div className="div-home-theme">
      <div className="div-home-img">
        <img src={imgem_tela1} alt="home" />
        <p className="titulo">Toda pergunta tem uma resposta.</p>
        <p className="descricao">Aprenda e compartilhe com outras pessoas</p>
      </div>
      <div className="menus">

      </div>
    </div>
  );
}
