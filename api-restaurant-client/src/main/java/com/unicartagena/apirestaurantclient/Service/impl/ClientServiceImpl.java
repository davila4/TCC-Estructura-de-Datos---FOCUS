package com.unicartagena.apirestaurantclient.Service.impl;

import com.unicartagena.apirestaurantclient.Aplication.Client;
import com.unicartagena.apirestaurantclient.Repository.ClientRepository;
import com.unicartagena.apirestaurantclient.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepository clientRepository;


    @Override
    public List<Client> listALL() {
        return clientRepository.findAll();
    }

    @Override
    public Client listById(long idClient) {
        return clientRepository.findById(idClient).get();
    }

    @Override
    public Client create(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client update(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public void deleteById(long idClient) {
        clientRepository.deleteById(idClient);

    }
}
