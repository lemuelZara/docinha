import styled, { css } from 'styled-components';

interface IContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    align-items: center;

    background: #FFF;
    border-radius: 0.8rem;    
    width: 100%;

    & + div {
        margin-top: 2.4rem;
    }

    textarea {
        flex: 1;
        height: 10rem;
        background: transparent;
        border: 0;
        padding: 1.8rem 2.4rem;
        resize: none;
        font-family: inherit;
        white-space: pre-line;
        text-align: left;

        &::placeholder {            
            color: #777;
        }

        ${props => props.isFocused && css`
            color: #000;
            border: 1px solid #CE263F;
            border-radius: 0.8rem;
        `}
    }

    svg {
        margin-right: 16px;
    }
`;