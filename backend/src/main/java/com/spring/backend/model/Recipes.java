package com.spring.backend.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity(name = "recipes")
public class Recipes {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @NotNull
    @NotBlank(message = "The title field cannot be null!")
    private String title;
    
    @NotNull
    @NotBlank(message = "The author field cannot be null!")
    private String author;
    
    @NotNull
    @NotBlank(message = "The urlImage field cannot be null!")
    private String urlImage;
    
    @NotNull
    @NotBlank(message = "The description field cannot be null!")
    @Lob
    private String description;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }    
}
