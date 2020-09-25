package com.spring.backend.utils;

import com.spring.backend.model.Recipes;
import com.spring.backend.repository.DocinhaRepository;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DummyData {
    
    @Autowired
    DocinhaRepository docinhaRepository;
    
    // @PostConstruct
    public void saveRecipes() {
        List<Recipes> recipesList = new ArrayList<>();
        
        Recipes recipeOne = new Recipes();
        recipeOne.setAuthor("Lemuel Coelho Zara");
        recipeOne.setTitle("Bolo de chocolate");
        recipeOne.setUrlImage("https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=980&q=80");
        recipeOne.setDescription("Um bolo de chocolate muito gostoso!");
        
        Recipes recipeTwo = new Recipes();
        recipeTwo.setAuthor("Pedro Miguel");
        recipeTwo.setTitle("Sorvete de morango");
        recipeTwo.setUrlImage("https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80");
        recipeTwo.setDescription("Um sorvete de morango muito gostoso!");
        
        recipesList.add(recipeOne);
        recipesList.add(recipeTwo);
        
        for (Recipes recipe: recipesList) {
            Recipes recipeSaved = docinhaRepository.save(recipe);
            System.out.println(recipeSaved.getId());
        }
    }
}
