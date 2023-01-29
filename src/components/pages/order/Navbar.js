import React from 'react'
import styled from 'styled-components';
import NavbarRight from './NavbarRight';
import Logo from '../../reusable-ui/Logo'

export default function Navbar({ prenom }) {
    return (
        <NavbarStyled>
            <Logo />
            <NavbarRight prenom={prenom} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
            background: blue;
            height: 10vh;
            display: flex;
            justify-content: space-between;
            padding: 20px;

            .left-side {
                background-color: pink;
            }

`;
