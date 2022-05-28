import {Botao} from './Botao';
import { CaixaDeTexto } from './CaixaDeTexto';
import { Senha } from './Senha';
import "./Formulario.css";
export function Formulario() {
    return (
        <form className='formulario'>
            <label  >Nome: <CaixaDeTexto dica="Nome" /></label>
            <label>Sobrenome: <CaixaDeTexto dica="Sobrenome" /></label>
            <label>E-mail: <CaixaDeTexto dica="E-mail" /></label>
            <label>Senha:  <Senha texto="Senha" /></label>
            <Botao texto="Enviar" message="Dados enviados!" />
            <Botao texto="Cancelar" message="Envio cancelado!" />
        </form>
    )
}