package com.example.Revendeurs.controllers;

import com.example.models.Produit;
import com.example.repositories.ProduitRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/produits")
public class ProduitController {

    private ProduitRepository ProduitRepository;

    @GetMapping("/test")
    public String testEndpoint() {
        return "Ça marche !";
    }

    @GetMapping
    public List<Produit> createAndReturnProduits() {
        // Créer des clients directement et les renvoyer sous forme de liste
    Produit produit = new Produit();
    produit.setId((long)1);
    produit.setName("Produit1");
    produit.setDetail("C'est un produit coloré");

    Produit produit2 = new Produit();
    produit2.setId((long)2);
    produit2.setName("Produit2");
    produit2.setDetail("C'est un produit qui est bien");

    return Arrays.asList(produit, produit2);
    }
}

