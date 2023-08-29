package com.example.WebShop.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Customer;
import com.example.models.Order;
import com.example.repositories.CustomerRepository;
import com.example.repositories.OrderRepository;

@RestController
@RequestMapping("/api/webshop")
public class WebShopController {

    @Autowired
    private CustomerRepository customerRepository;
    
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/customers")
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("/customers/{customerId}/orders")
    public List<Order> getCustomerOrders(@PathVariable Long customerId) {
        return orderRepository.findByCustomerId(customerId);
    }
    
    // ... Autres endpoints ...
}
