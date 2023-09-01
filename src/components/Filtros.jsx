import { useState, useEffect } from "react";

const Filtros = ({filtros, setFiltros}) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Nombre gasto</label>
          <select
            value={filtros}
            onChange={(e) => setFiltros(e.target.value)}

          >
            <option value="">-- Todas las categorias --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Hogar</option>
            <option value="gastos">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud e higiene</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
