import { useState } from "react";

const Selector = () => {
  const opciones = [
    { id: 1, valors: "mano", etiqueta: "Apple" },
    { id: 2, valors: "prueba", etiqueta: "Banana" },
    { id: 3, valors: "pave", etiqueta: "Camberry" }
  ];
  const [valor, setValor] = useState(opciones[0].valors);

  return (
    <div>
      <select onChange={(e) => setValor(e.target.value)} value={valor}>
        {opciones.map((x) => (
          <option key={x.id} value={x.valors}>
            {x.etiqueta}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
