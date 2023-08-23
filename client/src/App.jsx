import Canvas from "./canvas/index";
import Costomizer from "./pages/Costomizer";
import Home from "./pages/Home";

export default function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Costomizer />
    </main>
  );
}
