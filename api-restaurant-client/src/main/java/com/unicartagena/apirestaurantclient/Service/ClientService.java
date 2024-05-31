package com.unicartagena.apirestaurantclient.Service;

import com.unicartagena.apirestaurantclient.Aplication.Client;

import java.util.List;

public interface ClientService {
    List<Client> listALL();
    Client listById(long idClient);
    Client create(Client client);
    Client update(Client client);
    void deleteById(long idClient);
}
