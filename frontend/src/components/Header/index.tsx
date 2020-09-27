import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

interface IHeaderProps {
    openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => {
    return (
        <Container>
            <header>
                <span>Docinha</span>

                <nav>
                    <div>
                        <button type="button" onClick={openModal}>
                            <div className="text">Nova Receita</div>
                            <div className="icon">
                                <FiPlusSquare size={24} />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>
        </Container>
    )
}

export default Header;