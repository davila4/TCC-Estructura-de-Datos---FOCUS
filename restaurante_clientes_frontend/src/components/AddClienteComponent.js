import React, { useEffect, useState } from "react";
import ClienteService from "../service/ClienteService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddClienteComponent = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateCliente = (e) => {
        e.preventDefault();
        const cliente = { dni, nombre, apellido, telefono, direccion, email };

        if (id) {
            ClienteService.updateCliente(id, cliente).then((response) => {
                console.log(response.data);
                navigate("/clients");
            }).catch((error) => {
                console.log(error);
            });
        } else {
            ClienteService.createCliente(cliente).then((response) => {
                console.log(response.data);
                navigate("/clients");
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    useEffect(() => {
        if (id) {
            ClienteService.getClienteById(id)
                .then((response) => {
                    setDni(response.data.dni);
                    setNombre(response.data.nombre);
                    setApellido(response.data.apellido);
                    setTelefono(response.data.telefono);
                    setDireccion(response.data.direccion);
                    setEmail(response.data.email);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);

    const title = id ? "Actualizar cliente" : "Agregar cliente";

    return (
        <div className="container-scroll" style={{ backgroundImage: "url('/Pure-Animated-Background.gif')", padding: "5px", overflowX: "hidden", border: "none" }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center mb-4" style={{ fontWeight: "bold", fontFamily: "Cambria, serif", fontStyle: "italic", fontSize: "30px", color: "white" }}>{title}</h2>
                    <div className="card" style={{ backgroundColor: "lightgray" }}>
                        <div className="card-body">
                            <form onSubmit={saveOrUpdateCliente}>
                                <div className="form-group">
                                    <label className="form-label font-weight-bold">Dni</label>
                                    <input
                                        type="text"
                                        placeholder="Digite su dni"
                                        name="dni"
                                        className="form-control"
                                        value={dni}
                                        onChange={(e) => setDni(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label font-weight-bold">Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Digite su nombre"
                                        name="nombre"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label font-weight-bold">Apellido</label>
                                    <input
                                        type="text"
                                        placeholder="Digite su apellido"
                                        name="apellido"
                                        className="form-control"
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label font-weight-bold">Telefono</label>
                                    <input
                                        type="text"
                                        placeholder="Digite su número de teléfono"
                                        name="telefono"
                                        className="form-control"
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label font-weight-bold">Dirección</label>
                                    <input
                                        type="text"
                                        placeholder="Digite su dirección"
                                        name="direccion"
                                        className="form-control"
                                        value={direccion}
                                        onChange={(e) => setDireccion(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label font-weight-bold">Email</label>
                                    <input
                                        type="text"
                                        placeholder="Digite su email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success" type="submit">Guardar</button>
                                    &nbsp;&nbsp;
                                    <Link to="/clients" className="btn btn-danger">Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClienteComponent;
