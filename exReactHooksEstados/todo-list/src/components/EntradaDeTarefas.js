import "../App.css";
export function EntradaDeTarefas(props) {
  

  return (
    <form>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        onChange={(event) => CapturarInput(event)}
        value={props.tarefa}
      />
      <button type="submit" onClick={AdicionarTerefa}>Adicionar</button>
      <button type="submit" onClick={ CancelarTarefa}>Cancelar</button>
    </form>
  );

  function CapturarInput(event) {
    const inputTarefa = event.target.value;
    props.setTarefa(inputTarefa);
    
  }

  function AdicionarTerefa(event) {
    event.preventDefault();
    if (props.tarefa){
        props.setTarefas([...props.tarefas, props.tarefa]);
        props.setTarefa("");
    }else{
        alert("Digite uma tarefa")
    }
  }

  function CancelarTarefa(event){
    event.preventDefault();
    props.setTarefa("");

  }
}
