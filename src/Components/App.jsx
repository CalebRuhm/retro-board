import "../Styles/App.scss";
import Boards from "./Boards";

function App() {
  return (
    <div>
      <div className="Header">
        <h1>Retro Board</h1>
      </div>
        <Boards />
    </div>
  );
}

export default App;
