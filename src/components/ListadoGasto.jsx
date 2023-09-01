import Gasto from "./Gasto";

const ListadoGasto = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtros,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      

      {filtros ? (
        <>
          <h2>{gastosFiltrados.length ? "gastos" : "no hay gastos en esta categoria"}</h2>
          {gastosFiltrados.map((gasto) => (   
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
        <h2>{gastos.length ? "gastos" : "no hay gastos"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGasto;
