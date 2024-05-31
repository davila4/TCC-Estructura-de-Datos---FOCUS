import React, { useEffect, useState } from "react";
import ClienteService from "../service/ClienteService";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";


export const ListClientesComponent = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    listarClientes();
  },[])


  const listarClientes = () => {
    ClienteService.getAllClientes().then(response => {
      setClientes(response.data);
      console.log(response.data);     
    }).catch(error =>{
      console.log(error);
    })
  }

  const deleteCliente = (clienteId) => {
     ClienteService.deleteCliente(clienteId).then((response) => {
      listarClientes();
    }).catch(error => {
      console.log(error);
    })
  }


  return (
    <div className="container">
    <h2 className="text-center" style={{ fontFamily: "Cambria, serif", fontStyle: "italic", fontSize: "30px", color: "black" }}>Clientes del restaurante</h2>
    <Link to="/add-clients" className="btn btn-primary mb-2">Agregar cliente</Link>
    <table className="table table-bordered table-striped" style={{ fontFamily: "Arial, sans-serif"}}>
      <thead>
          <tr>
            <th>ID</th>
            <th>Dni</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
             clientes.map(
              cliente => 
              <tr key={cliente.id || cliente.Id || cliente.ID}>
                  <td>{cliente.id || cliente.Id || cliente.ID}</td>
                  <td>{cliente.dni || cliente.Dni}</td>
                  <td>{cliente.nombre || cliente.Nombre}</td>
                  <td>{cliente.apellido || cliente.Apellido}</td>
                  <td>{cliente.telefono || cliente.Telefono}</td>
                  <td>{cliente.direccion || cliente.Direccion}</td>
                 <td>{cliente.email || cliente.Email}</td>

                 <td>
                  <Link className="btn btn-info" to={ `/edit-clients/${cliente.id}` }>Actualizar</Link>
                  <button style={{marginLeft:"10px"}}className="btn btn-danger" onClick={() => deleteCliente(cliente.id)}>Eliminar</button>
                 </td>
              </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListClientesComponent;
