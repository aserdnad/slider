import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: "1", nombre: "culo", etiqueta: "arte" },
    { id: "2", nombre: "mano", etiqueta: "comida" }
  ]
};

export const tiendasDisponibles = createSlice({
  name: "tiendasD",
  initialState,
  reducers: {
    filtrarBuscador: (state, filtro) => {
      state.value = state.value.filter((x) =>
        x.nombre.includes(filtro.payload)
      );
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const {
  filtrarBuscador,
  decrement,
  incrementByAmount
} = tiendasDisponibles.actions;

export default tiendasDisponibles.reducer;
