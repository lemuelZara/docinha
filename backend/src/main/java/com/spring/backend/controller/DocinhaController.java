package com.spring.backend.controller;

import com.spring.backend.model.Recipes;
import com.spring.backend.service.DocinhaService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DocinhaController {

    @Autowired
    DocinhaService docinhaService;

    @PostMapping(path = "/recipes")
    public ResponseEntity<Recipes> create(@RequestBody Recipes recipe) {
        return ResponseEntity
                .status(201)
                .body(docinhaService.save(recipe));
    }

    @PutMapping(path = "/recipes/{id}")
    public ResponseEntity<Recipes> update(
            @PathVariable(required = true, name = "id") Long id,
            @RequestBody Recipes recipe
    ) {
        Optional<Recipes> recipeToUpdate = docinhaService.findById(id);

        if (!recipeToUpdate.isPresent()) {
            return ResponseEntity
                    .status(404)
                    .build();
        }

        recipeToUpdate.get().setAuthor(recipe.getAuthor());
        recipeToUpdate.get().setTitle(recipe.getTitle());
        recipeToUpdate.get().setUrlImage(recipe.getUrlImage());
        recipeToUpdate.get().setDescription(recipe.getDescription());

        return ResponseEntity
                .status(200)
                .body(docinhaService.save(recipeToUpdate.get()));
    }

    @DeleteMapping(path = "/recipes/{id}")
    public ResponseEntity<Void> remove(
            @PathVariable(required = true, name = "id") Long id
    ) {
        docinhaService.remove(id);
        
        ResponseEntity
                .status(204);
        
        return null;
    }

    @GetMapping(path = "/recipes")
    public ResponseEntity<List<Recipes>> show() {
        return ResponseEntity
                .status(200)
                .body(docinhaService.findAll());
    }

    @GetMapping(path = "/recipes/{id}")
    public ResponseEntity<Recipes> index(
            @PathVariable(required = true, name = "id") Long id
    ) {
        Optional<Recipes> findRecipeById = docinhaService.findById(id);

        if (!findRecipeById.isPresent()) {
            return ResponseEntity
                    .status(404)
                    .build();
        }

        return ResponseEntity
                .status(200)
                .body(findRecipeById.get());
    }
}
