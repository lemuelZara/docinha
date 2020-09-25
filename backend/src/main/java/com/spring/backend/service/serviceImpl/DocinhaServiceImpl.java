package com.spring.backend.service.serviceImpl;

import com.spring.backend.model.Recipes;
import com.spring.backend.repository.DocinhaRepository;
import com.spring.backend.service.DocinhaService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocinhaServiceImpl implements DocinhaService {

    @Autowired
    DocinhaRepository docinhaRepository;

    @Override
    public List<Recipes> findAll() {
        return docinhaRepository.findAll();
    }

    @Override
    public Optional<Recipes> findById(Long id) {
        return docinhaRepository.findById(id);
    }

    @Override
    public Recipes save(Recipes recipe) {
        return docinhaRepository.save(recipe);
    }

    @Override
    public void remove(Long id) {
        docinhaRepository.deleteById(id);
    }
}
