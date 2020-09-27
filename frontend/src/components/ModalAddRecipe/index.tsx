import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import TextArea from '../TextArea';

interface IRecipePlate {
    id: number;
    title: string;
    author: string;
    urlImage: string;
    description: string;
}

interface ICreateRecipeData {
    title: string;
    author: string;
    urlImage: string;
    description: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddRecipe: (recipe: Omit<IRecipePlate, 'id'>) => void;
}

const ModalAddRecipe: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    handleAddRecipe
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: ICreateRecipeData) => {
            handleAddRecipe(data);
            setIsOpen();
        }, [handleAddRecipe, setIsOpen]
    )

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Nova receita</h1>

                <Input name="title" placeholder="Tìtulo para a receita" />
                <Input name="author" placeholder="Nome do autor da receita" />
                <Input name="urlImage" placeholder="Informe a URL da imagem" />
                <TextArea name="description" placeholder="Escreva aqui uma descrição de como fazer essa receita" />

                <button type="submit">
                    <p className="text">Adicionar Receita</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
}

export default ModalAddRecipe;