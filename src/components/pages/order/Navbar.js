import React from 'react'
import styled from 'styled-components';
import NavbarRight from './NavbarRight';
import Logo from '../../reusable-ui/Logo'
import { theme } from '../../../theme';

export default function Navbar({ prenom }) {
    return (
        <NavbarStyled>
            <Logo />
            <NavbarRight prenom={prenom} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
background-color: ${theme.colors.white};
            height: 10vh;
            display: flex;
            justify-content: space-between;
            padding: 20px;

            border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0px 0px;

`;
