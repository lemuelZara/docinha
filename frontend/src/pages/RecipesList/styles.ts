import styled from 'styled-components';

export const FoodsContainer = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 4rem 0;
    margin-top: -14rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.2rem;
`;