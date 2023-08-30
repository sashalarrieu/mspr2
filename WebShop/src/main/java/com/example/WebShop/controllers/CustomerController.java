package com.example.WebShop.controllers;

import com.example.models.Customer;
import com.example.repositories.CustomerRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private CustomerRepository customerRepository;

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("/test")
    public String testEndpoint() {
        return "Ça marche !";
    }

    @GetMapping("/insert")
    public List<Customer> createAndReturnCustomers() {
        // Créer des clients directement et les renvoyer sous forme de liste
    Customer customer1 = new Customer();
    customer1.setName("John Doe");
    customer1.setEmail("john.doe@example.com");

    Customer customer2 = new Customer();
    customer2.setName("Jane Smith");
    customer2.setEmail("jane.smith@example.com");

    return Arrays.asList(customer1, customer2);
    }
}

