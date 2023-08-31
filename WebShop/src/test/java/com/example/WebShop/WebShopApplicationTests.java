/*package com.example.WebShop;

import com.example.WebShop.controllers.CustomerController;
import com.example.models.Customer;
import com.example.repositories.CustomerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CustomerController.class)
public class WebShopApplicationTests {

    private MockMvc mockMvc;

    @MockBean
    private CustomerRepository customerRepository;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(new CustomerController(customerRepository)).build();
    }

    @Test
    public void testGetAllCustomers() throws Exception {
        List<Customer> customers = new ArrayList<>();
        customers.add(new Customer(1L, "John Doe", "john.doe@example.com"));
        customers.add(new Customer(2L, "Jane Smith", "jane.smith@example.com"));

        when(customerRepository.findAll()).thenReturn(customers);

        MvcResult result = mockMvc.perform(get("/api/customers"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andReturn();

        String responseBody = result.getResponse().getContentAsString();
        // Vérifiez le contenu de responseBody selon vos attentes
        // Vous pouvez utiliser une bibliothèque comme Jackson pour désérialiser la réponse JSON
    }
}
*/