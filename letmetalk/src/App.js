import Rotas from "./Rotas";
import RoomProvideder from "./context/RoomProvider"
import AskProvideder from "./context/AskProvider"
import "./App.css"

function App() {
  return (
    <RoomProvideder>
      <AskProvideder>
      <Rotas />
      </AskProvideder>
    </RoomProvideder>
  );
}
export default App;
