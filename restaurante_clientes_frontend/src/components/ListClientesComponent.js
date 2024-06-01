import React, { useEffect, useState } from "react";
import ClienteService from "../service/ClienteService";
import { Link } from "react-router-dom";

export const ListClientesComponent = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    listarClientes();
  }, []);

  const listarClientes = () => {
    ClienteService.getAllClientes()
      .then((response) => {
        setClientes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCliente = (clienteId) => {
    ClienteService.deleteCliente(clienteId)
      .then((response) => {
        listarClientes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2
        className="text-center"
        style={{
          fontFamily: "Cambria, serif",
          fontStyle: "italic",
          fontSize: "30px",
          color: "white",
        }}
      >
        Clientes del restaurante
      </h2>
      <Link to="/add-clients" className="btn btn-primary mb-2" style={{ backgroundColor: "#481E14", color: "white" }}>
        Agregar cliente
      </Link>
      <table
        className="table table-bordered table-striped"
        style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#DBDBDB" }}
      >
        <thead>
          <tr>
            <th style={{ width: "5%" }}>ID</th>
            <th style={{ width: "10%" }}>Dni</th>
            <th style={{ width: "15%" }}>Nombre</th>
            <th style={{ width: "15%" }}>Apellido</th>
            <th style={{ width: "10%" }}>Telefono</th>
            <th style={{ width: "20%" }}>Direccion</th>
            <th style={{ width: "15%" }}>Email</th>
            <th style={{ width: "10%" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id || cliente.Id || cliente.ID}>
              <td>{cliente.id || cliente.Id || cliente.ID}</td>
              <td>{cliente.dni || cliente.Dni}</td>
              <td>{cliente.nombre || cliente.Nombre}</td>
              <td>{cliente.apellido || cliente.Apellido}</td>
              <td>{cliente.telefono || cliente.Telefono}</td>
              <td>{cliente.direccion || cliente.Direccion}</td>
              <td>{cliente.email || cliente.Email}</td>
              <td>
                <div className="btn-group" role="group" aria-label="Acciones">
                  <Link
                    className="btn btn-info btn-sm"
                    to={`/edit-clients/${cliente.id}`}
                    style={{ marginRight: "5px" }}
                  >
                    Actualizar
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteCliente(cliente.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListClientesComponent;
