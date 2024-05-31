package com.unicartagena.apirestaurantclient.Controller;

import com.unicartagena.apirestaurantclient.Aplication.Client;
import com.unicartagena.apirestaurantclient.Repository.ClientRepository;
import com.unicartagena.apirestaurantclient.excepciones.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    // Método para listar todos los clientes
    @GetMapping("/clients")
    public List<Client> listarTodosLosClientes() {
        return clientRepository.findAll();
    }

    // Método para crear un cliente
    @PostMapping("/clients")
    public Client crearCliente(@RequestBody Client client) {
        return clientRepository.save(client);
    }

    // Método para buscar un cliente por ID
    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> obtenerClientePorId(@PathVariable Long id) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el cliente con el ID: " + id));
        return ResponseEntity.ok(client);
    }

    // Método para actualizar un cliente
    @PutMapping("/clients/{id}")
    public ResponseEntity<Client> actualizarCliente(@PathVariable Long id, @RequestBody Client detallesClient) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el cliente con el ID: " + id));

        client.setDni(detallesClient.getDni());
        client.setNombre(detallesClient.getNombre());
        client.setApellido(detallesClient.getApellido());
        client.setTelefono(detallesClient.getTelefono());
        client.setDireccion(detallesClient.getDireccion());
        client.setEmail(detallesClient.getEmail());

        Client clientActualizado = clientRepository.save(client);
        return ResponseEntity.ok(clientActualizado);
    }

    // Método para eliminar un cliente
    @DeleteMapping("/clients/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarCliente(@PathVariable Long id) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el cliente con el ID: " + id));

        clientRepository.delete(client);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
