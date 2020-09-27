import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';

import Header from '../../components/Header';
import Recipe from '../../components/Recipe';
import ModalAddRecipe from '../../components/ModalAddRecipe';

import { RecipesContainer } from './styles';
import ModalEditRecipe from '../../components/ModalEditRecipe';

interface IRecipePlate {
    id: number;
    title: string;
    author: string;
    urlImage: string;
    description: string;
}

const RecipesList = () => {
    const [recipes, setRecipes] = useState<IRecipePlate[]>([]);
    const [editingRecipe, setEditingRecipe] = useState<IRecipePlate>({} as IRecipePlate);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

    useEffect(() => {
        async function loadRecipes(): Promise<void> {
            const { data } = await api.get('/recipes');

            setRecipes(data);
        }

        loadRecipes();
    }, [])

    async function handleAddRecipe(
        recipe: Omit<IRecipePlate, 'id'>
    ): Promise<void> {
        try {
            const { data } = await api.post('/recipes', recipe);

            setRecipes([...recipes, data]);
        } catch (err) {
            console.error(err)
        }
    }

    async function handleDeleteRecipe(
        id: number
    ): Promise<void> {
        try {
            await api.delete(`/recipes/${id}`)

            setRecipes(recipes.filter(recipe => recipe.id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    async function handleUpdateRecipe(
        recipe: Omit<IRecipePlate, 'id'>
    ): Promise<void> {
        console.log(editingRecipe.id)
        try {
            const response = await api.put(`/recipes/${editingRecipe.id}`, {
                ...editingRecipe,
                ...recipe
            })

            setRecipes(recipes.map(mappedRecipe => {
                return mappedRecipe.id === editingRecipe.id ? { ...response.data } : mappedRecipe
            }))
        } catch (error) {
            console.error(error)
        }
    }

    function toggleModal(): void {
        console.log('toggleModal')
        setModalOpen(!modalOpen);
    }

    function toggleEditModal(): void {
        setEditModalOpen(!editModalOpen);
    }

    function handleEditRecipe(recipe: IRecipePlate): void {
        setEditingRecipe(recipe);
        toggleEditModal();
    }

    return (
        <>
            <Header openModal={toggleModal} />
            <ModalAddRecipe
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                handleAddRecipe={handleAddRecipe}
            />
            <ModalEditRecipe
                isOpen={editModalOpen}
                setIsOpen={toggleEditModal}
                editingRecipe={editingRecipe}
                handleUpdateRecipe={handleUpdateRecipe}
            />
            <RecipesContainer>
                {recipes && recipes.map(recipe => (
                    <Recipe
                        key={recipe.id}
                        recipe={recipe}
                        handleDelete={handleDeleteRecipe}
                        handleEditRecipe={handleEditRecipe}
                    />
                ))}
            </RecipesContainer>
        </>
    )
};

export default RecipesList;