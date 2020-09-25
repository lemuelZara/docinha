import styled from 'styled-components';

export const Container = styled.div`
    padding: 3rem 0;
    background: #CE263F;

    header {
        max-width: 120rem;
        margin: 0 auto;
        padding: 0 0 16rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: 2.25rem;
            font-weight: bold;
            letter-spacing: 0.4rem;
            color: #E57283;
            font-family: "Poppins";
        }

        nav {
            div {
                button {
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 0.85rem;
                    border: 0;
                    background: #fff;
                    color: #CE263F;

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    .text {
                        padding: 1.6rem 1.6rem;
                    }

                    .icon {
                        display: flex;
                        padding: 1.6rem 1.6rem;
                        border-radius: 0 0.85rem 0.85rem 0;
                        margin: 0 auto;
                    }
                }
            }
        }
    }
    
`;