import "./App.css";
import Tarjeta from "./components/tarjeta/Tarjeta";

function App() {
  return (
    <>
      <div
        className="flex justify-center items-center from-red-500 bg-gradient-to-tr h-screen w-screen"
        style={{ overflow: "hidden" }}
      >
        <Tarjeta />
      </div>
    </>
  );
}

export default App;
