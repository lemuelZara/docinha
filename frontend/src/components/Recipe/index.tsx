import React from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi'

import { Container } from './styles'

interface IRecipePlate {
    id: number;
    title: string;
    author: string;
    urlImage: string;
    description: string;
}

interface IProps {
    recipe: IRecipePlate;
    handleDelete: () => void;
    handleEditRecipe: () => void;
}

const Recipe: React.FC<IProps> = ({
    recipe,
    handleDelete,
    handleEditRecipe
}: IProps) => {
    return (
        <Container>
            <header>
                <img src={recipe.urlImage} alt={recipe.title} />
            </header>
            <section className="body">
                <h2>{recipe.title}</h2>
                <p>{recipe.author}</p>
                <p>{recipe.description}</p>
            </section>
            <section className="footer">
                <div className="icon-container">
                    <button
                        type="button"
                        className="icon"
                        onClick={() => { }}
                    >
                        <FiEdit size={20} />
                    </button>

                    <button
                        type="button"
                        className="icon"
                        onClick={handleDelete}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>
            </section>
        </Container>
    )
}

export default Recipe;