import styled from 'styled-components';

export const Container = styled.div`
    background: #f0f0f5;
    border-radius: 0.85rem;

    header {
        background: #ffb84d;
        border-radius: 0.85rem 0.85rem 0 0;
        height: 19rem;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
            user-select: none;
        }
    }

    section.body {
        padding: 3rem;

        h2 {
            color: #3d3d4d;
        }

        button {
            padding: 1rem 2rem;
            border: 0;
            border-radius: 0.8rem;
            color: #fff;
            background: #CE263F;
            margin-top: 2rem;
            font-family: inherit;
            font-size: 1.3rem;
        }

        p {
            color: #3d3d4d;
            font-size: 1.5rem;
            margin-top: 1.6rem;
        }        

        p:last-child {
            font-size: 1.2rem;
        }
    }

    section.footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 3rem;

        div.icon-container {
            display: flex;

            button {
                background: #fff;
                padding: 1rem;
                border-radius: 0.8rem;
                display: flex;
                border: none;
                transition: 0.1s;
                cursor: pointer;

                svg {
                    color: #3d3d4d;
                }

                & + button {
                    margin-left: 6px;
                }
            }
        }
    }
`;