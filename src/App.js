import Selector from "./Components/Selector";
import Tiendas from "./Components/Tiendas";
import Carousel from "./Components/Carousel";
import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filtrarBuscador } from "./Tienda/tiendas";

export default function App() {
  // const tienda = [
  //   { id: "1", nombre: "culo", etiqueta: "arte" },
  //   { id: "2", nombre: "mano", etiqueta: "comida" }
  // ];

  const [buscar, setBuscar] = useState("");

  const valores = useSelector((state) => state.tiendasD.value);
  const dispatch = useDispatch();

  const cambios = (e) => {
    setBuscar(e.target.value);
    dispatch(filtrarBuscador(buscar));
  };

  return (
    <div className="App">
      <Carousel />
      <Selector />
      <input
        type="text"
        onChange={(e) => {
          cambios(e);
        }}
      />
      {valores.map((x) => (
        <Tiendas key={x.id} tienda={x} />
      ))}
    </div>
  );
}
