import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiCheckSquare } from 'react-icons/fi';

import Modal from '../Modal';
import { Form } from './styles';
import Input from '../Input';
import TextArea from '../TextArea';

interface IRecipePlate {
    id: number;
    title: string;
    author: string;
    urlImage: string;
    description: string;
}

interface IEditRecipeData {
    title: string;
    author: string;
    urlImage: string;
    description: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdateRecipe: (recipe: Omit<IRecipePlate, 'id'>) => void;
    editingRecipe: IRecipePlate;
}

const ModalEditRecipe: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    editingRecipe,
    handleUpdateRecipe
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: IEditRecipeData) => {
            handleUpdateRecipe(data);
            setIsOpen();
        },
        [handleUpdateRecipe, setIsOpen]
    )

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={editingRecipe}>
                <h1>Editar Receita</h1>

                <Input name="title" placeholder="Tìtulo para a receita" />
                <Input name="author" placeholder="Nome do autor da receita" />
                <Input name="urlImage" placeholder="Informe a URL da imagem" />
                <TextArea name="description" placeholder="Escreva aqui uma descrição de como fazer essa receita" />

                <button type="submit">
                    <p className="text">Editar Receita</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    )
}

export default ModalEditRecipe;