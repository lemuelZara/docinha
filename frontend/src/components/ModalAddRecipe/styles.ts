import styled from 'styled-components';
import { Form as UnForm } from '@unform/web';

export const Form = styled(UnForm)`
    padding: 4.8rem 4rem;
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 600;
        font-size: 3rem;
        line-height: 3rem;
        margin-bottom: 4rem;
    }

    button {
        margin-top: 4rem;
        align-self: flex-start;
        font-weight: 600;
        border-radius: 0.8rem;
        border: 0;
        background: #CE263F;
        color: #fff;
        display: flex;
        align-items: center;
        cursor: pointer;

        .text {
            padding: 1.6rem 2.4rem;
        }

        .icon {
            display: flex;
            padding: 1.6rem 1.6rem;
            margin: 0 auto;
        }
    }
`;