import { useState } from "react"
import "./App.css"
import { EntradaDeTarefas } from "./components/EntradaDeTarefas"
import { ListaDeTarefas } from "./components/ListaDeTarefas"

function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefa, setTarefa] = useState("")

  return (
    <div className="divzona">
      <h2>Tarefas</h2>
      <ListaDeTarefas tarefas={tarefas} />
      <EntradaDeTarefas
        tarefa={tarefa}
        tarefas={tarefas}
        setTarefas={setTarefas}
        setTarefa={setTarefa}
      />
    </div>
  );
}

export default App;
