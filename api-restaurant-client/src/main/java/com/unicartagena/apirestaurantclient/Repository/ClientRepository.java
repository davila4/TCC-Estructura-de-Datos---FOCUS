package com.unicartagena.apirestaurantclient.Repository;

import com.unicartagena.apirestaurantclient.Aplication.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long > {

}
