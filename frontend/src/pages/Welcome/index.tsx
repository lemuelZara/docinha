import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Header, Hero, SectionContent, Illustration } from './styles'

import CakeSVG from '../../assets/cake.svg';

const Welcome = () => {
    return (
        <Container>
            <Header>
                <span>docinha</span>
            </Header>

            <Hero>
                <SectionContent>
                    <h1>Um site especial para você mostrar suas receitas!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur eaque quam obcaecati ratione numquam porro illum distinctio veniam incidunt.</p>
                    <Link to="/recipes">😋 Envie sua receita agora!</Link>
                </SectionContent>
                <Illustration>
                    <img src={CakeSVG} alt="" />
                </Illustration>
            </Hero>
        </Container>
    )
};

export default Welcome;