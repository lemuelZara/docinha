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
            pointer-events: none;
            user-select: none;
        }
    }

    section.body {
        padding: 3rem;

        h2 {
            color: #3d3d4d;
        }

        p {
            color: #3d3d4d;
            margin-top: 1.6rem;
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