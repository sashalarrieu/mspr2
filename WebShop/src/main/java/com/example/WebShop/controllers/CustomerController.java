package com.example.WebShop.controllers;

import com.example.models.Customer;
import com.example.models.Order;
import com.example.repositories.CustomerRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/")
public class CustomerController {

    private CustomerRepository customerRepository;


    
    @GetMapping("customers")
    public List<Customer> getCustomers() {
        Customer customer1 = new Customer();
        customer1.setId(1L);
        customer1.setName("John Doe");
        customer1.setEmail("john.doe@example.com");

        Customer customer2 = new Customer();
        customer2.setId(2L);
        customer2.setName("Jane Smith");
        customer2.setEmail("jane.smith@example.com");
        return Arrays.asList(customer1, customer2);
    }

    @GetMapping("customers/{customerID}")
    public Customer getCustomerByID() {
        Customer customer1 = new Customer();
        customer1.setId(1L);
        customer1.setName("John Doe");
        customer1.setEmail("john.doe@example.com");
        return customer1;
    }

    @GetMapping("customers/{customerID}/orders")
    public List<Order> getOrdersByCustomerByID() {
        Customer customer1 = new Customer();
        customer1.setId(1L);
        customer1.setName("John Doe");
        customer1.setEmail("john.doe@example.com");
        Order order1_customer1 = new Order();
        order1_customer1.setId(1L);
        order1_customer1.setCustomer(customer1);
        order1_customer1.setDetail("café noir");

        Order order2_customer1 = new Order();
        order2_customer1.setId(2L);
        order2_customer1.setCustomer(customer1);
        order2_customer1.setDetail("chocolat chaud");
        return Arrays.asList(order1_customer1, order2_customer1);
    }

    @GetMapping("customers/{customerID}/orders/{ordersID}")
    public Order getOrderInOrders() {
        Customer customer2 = new Customer();
        customer2.setId(2L);
        customer2.setName("Jane Smith");
        customer2.setEmail("jane.smith@example.com");
        Order order1_customer2 = new Order();
        order1_customer2.setId(3L);
        order1_customer2.setCustomer(customer2);
        order1_customer2.setDetail("café au lait");
        return order1_customer2;
    }
}

