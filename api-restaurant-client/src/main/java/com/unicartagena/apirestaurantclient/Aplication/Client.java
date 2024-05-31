package com.unicartagena.apirestaurantclient.Aplication;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table (name = "Clientes")

public class Client {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;

    @Column(length = 10, nullable = false, unique = true)
    private String Dni;

    @Column(length = 60, nullable = false)
    private String Nombre;

    @Column(length = 60, nullable = false)
    private String Apellido;

    @Column(length = 15, nullable = false)
    private String Telefono;

    @Column(length = 60, nullable = false)
    private String Direccion;

    @Column(length = 60, nullable = false, unique = true)
    private String Email;

}
