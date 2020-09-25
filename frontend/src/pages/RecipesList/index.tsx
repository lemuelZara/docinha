import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';

import Header from '../../components/Header';
import Recipe from '../../components/Recipe';
import ModalAddRecipe from '../../components/ModalAddRecipe';

import { FoodsContainer } from './styles';

interface IRecipesPlate {
    id: number;
    title: string;
    author: string;
    urlImage: string;
    description: string;
}

const RecipesList = () => {
    const [recipes, setRecipes] = useState<IRecipesPlate[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        async function loadRecipes(): Promise<void> {
            await api.get('/recipes').then(response => setRecipes(response.data));
        }

        loadRecipes();
    })

    async function handleAddRecipe(
        recipe: Omit<IRecipesPlate, 'id'>
    ): Promise<void> {
        try {
            const response = await api.post('/recipes', recipe);

            setRecipes([...recipes, response.data]);
        } catch (err) {
            console.error(err)
        }
    }

    async function handleDeleteRecipe(
        id: number
    ): Promise<void> {
        await api.delete(`/recipes/${id}`);

        const updatedRecipesState = recipes.filter(recipe => recipe.id !== id);

        setRecipes(updatedRecipesState);
    }

    function toggleModal(): void {
        setModalOpen(!modalOpen);
    }

    return (
        <>
            <Header openModal={toggleModal} />
            <ModalAddRecipe
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                handleAddRecipe={handleAddRecipe}
            />
            <FoodsContainer>
                {recipes && recipes.map(recipe => (
                    <Recipe
                        key={recipe.id}
                        recipe={recipe}
                        handleDelete={() => handleDeleteRecipe(recipe.id)}
                        handleEditRecipe={() => { }}
                    />
                ))}
            </FoodsContainer>
        </>
    )
};

export default RecipesList;