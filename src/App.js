import Selector from "./Components/Selector";
import Tiendas from "./Components/Tiendas";
import Carousel from "./Components/Carousel";
import "./styles.css";

export default function App() {
  const tienda = [
    { id: "1", nombre: "culo", etiqueta: "arte" },
    { id: "2", nombre: "mano", etiqueta: "comida" }
  ];

  return (
    <div className="App">
      <Carousel />
      <Selector />
      {tienda.map((x) => (
        <Tiendas key={x.id} tienda={x} />
      ))}
    </div>
  );
}
