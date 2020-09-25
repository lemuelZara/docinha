package com.spring.backend.service;

import com.spring.backend.model.Recipes;
import java.util.List;
import java.util.Optional;

public interface DocinhaService {

    List<Recipes> findAll();

    Optional<Recipes> findById(Long id);

    Recipes save(Recipes recipe);
    
    void remove(Long id);
}
