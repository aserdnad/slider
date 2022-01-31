import Selector from "./Components/Selector";
import Tiendas from "./Components/Tiendas";
import Carousel from "./Components/Carousel";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const tienda = [
    { id: "1", nombre: "culo", etiqueta: "arte" },
    { id: "2", nombre: "mano", etiqueta: "comida" }
  ];

  const [buscar, setBuscar] = useState("");

  return (
    <div className="App">
      <Carousel />
      <Selector />
      <input
        type="text"
        onChange={(e) => {
          setBuscar(e.target.value);
        }}
      />
      {tienda
        .filter((y) => (buscar === "" ? y : y.nombre.includes(buscar)))
        .map((x) => (
          <Tiendas key={x.id} tienda={x} />
        ))}
    </div>
  );
}
