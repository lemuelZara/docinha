package com.spring.backend.repository;

import com.spring.backend.model.Recipes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocinhaRepository extends JpaRepository<Recipes, Long> {}