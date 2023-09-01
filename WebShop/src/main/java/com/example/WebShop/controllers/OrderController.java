package com.example.WebShop.controllers;

import com.example.models.Customer;
import com.example.models.Order;
import com.example.repositories.OrderRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private OrderRepository orderRepository;

    @GetMapping("/test")
    public String testEndpoint() {
        return "Ça marche bien !";
    }

    @GetMapping
    public List<Order> createAndReturnOrders() {
        Customer customer1 = new Customer();
        customer1.setName("John Doe");
        customer1.setEmail("john.doe@example.com");
    
        Customer customer2 = new Customer();
        customer2.setName("Jane Smith");
        customer2.setEmail("jane.smith@example.com");

        // Créer des commandes directement et les renvoyer sous forme de liste
        Order order1 = new Order();
        // Settez les propriétés de la commande
        order1.setId((long) 1);
        order1.setCustomer(customer2);
        order1.setOrderNumber("ORD123");

        Order order2 = new Order();
        // Settez les propriétés de la commande
        order2.setId((long) 2);
        order2.setCustomer(customer1);
        order2.setOrderNumber("ORD124");

        return Arrays.asList(order1, order2);
    }
}
