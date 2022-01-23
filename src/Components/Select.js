import { useState } from "react";

const Select = () => {
  const [valor, setValor] = useState();

  return (
    <div>
      <select onChange={(e) => setValor(e.target.value)} value={valor}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    </div>
  );
};

export default Select;
