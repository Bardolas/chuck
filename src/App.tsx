import "./App.css";
import PilaTarjeta from "./components/pilaTarjetas/PilaTarjetas";

function App() {
  return (
    <>
      <div
        className="flex justify-center items-center from-red-500 bg-gradient-to-tr h-screen w-screen"
        style={{ overflow: "hidden" }}
      >
        <PilaTarjeta />
      </div>
    </>
  );
}

export default App;
