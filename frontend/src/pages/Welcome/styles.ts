import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding: 2rem 10rem;
    background: #FDF5F6;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    > span {
        font-size: 2.25rem;
        font-weight: bold;
        letter-spacing: 0.4rem;
        color: #E57283;
        font-family: "Poppins";
    }
`;

export const Hero = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 11rem 0 5rem 0;
`;

export const SectionContent = styled.div`
    > h1 {
        font-family: "Poppins";
        font-weight: 700;
        font-size: 5rem;
        line-height: 5.5rem;
        color: #CE263F;
        margin-bottom: 3rem;
    }

    > p {
        font-family: "Open Sans";
        font-weight: 400;
        font-size: 1.75rem;
        line-height: 2.5rem;
        color: #868686;
        max-width: 50rem;
        margin-bottom: 6rem;
    }

    > a {
        padding: 1.75rem;
        border: none;
        background: #CE263F;
        border-radius: 0.75rem;
        font-weight: bold;
        color: #fff;
        font-family: "Open Sans";
        font-size: 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const Illustration = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: -5rem;
    overflow: hidden;

    > img {
        width: 40rem;
    }
`;