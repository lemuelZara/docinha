import React, { Fragment, useState } from 'react';
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
    handleDelete: (id: number) => void;
    handleEditRecipe: (recipe: IRecipePlate) => void;
}

const Recipe: React.FC<IProps> = ({
    recipe,
    handleDelete,
    handleEditRecipe
}: IProps) => {
    const [readMore, setReadMore] = useState<boolean>(false);

    function setEditingRecipe(): void {
        handleEditRecipe(recipe)
    }

    return (
        <Container>
            <header>
                <img src={recipe.urlImage} alt={recipe.title} />
            </header>
            <section className="body">
                <h2>{recipe.title}</h2>
                <p>{recipe.author}</p>
                <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Voltar' : 'Leia mais...'}</button>
                {
                    readMore &&
                    <p>{recipe.description.split('\n').map(text => {
                        return (
                            <Fragment key={text}>
                                {text}
                                <br />
                            </Fragment>
                        )
                    })}</p>
                }
            </section>
            <section className="footer">
                <div className="icon-container">
                    <button
                        type="button"
                        className="icon"
                        onClick={() => setEditingRecipe()}
                    >
                        <FiEdit size={20} />
                    </button>

                    <button
                        type="button"
                        className="icon"
                        onClick={() => handleDelete(recipe.id)}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>
            </section>
        </Container>
    )
}

export default Recipe;