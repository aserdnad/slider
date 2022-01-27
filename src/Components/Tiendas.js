const Tiendas = ({ tienda }) => {
  return (
    <div>
      <h3>{tienda.nombre}</h3>
      <h4>{tienda.etiqueta}</h4>
    </div>
  );
};

export default Tiendas;
