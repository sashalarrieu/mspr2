package com.example.Revendeurs.controllers;

import com.example.models.Produit;
import com.example.repositories.ProduitRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/")
public class ProduitController {

    private ProduitRepository ProduitRepository;

    @GetMapping("products")
    public List<Produit> getProducts() {
        Produit produit1 = new Produit();
        produit1.setId((long)1);
        produit1.setName("café noir");
        produit1.setDetail("0.20");

        Produit produit2 = new Produit();
        produit2.setId((long)2);
        produit2.setName("chocolat chaud");
        produit2.setDetail("0.30");

        Produit produit3 = new Produit();
        produit3.setId((long)3);
        produit3.setName("eau chaude");
        produit3.setDetail("0.10");

        Produit produit4 = new Produit();
        produit4.setId((long)4);
        produit4.setName("café au lait");
        produit4.setDetail("0.30");
        return Arrays.asList(produit1, produit2,produit3, produit4);
    }

    @GetMapping("products/{productID}")
    public Produit getProductByID() {
        Produit produit = new Produit();
        produit.setId((long)1);
        produit.setName("café noir");
        produit.setDetail("0.20");
        return produit;
    }


}

