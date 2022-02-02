import { configureStore } from "@reduxjs/toolkit";
import tiendasDisponibles from "./tiendas";

export const store = configureStore({
  reducer: {
    tiendasD: tiendasDisponibles
  }
});
