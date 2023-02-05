import React from 'react'
import styled from 'styled-components';
import NavbarRight from './NavbarRight';
import Logo from '../../reusable-ui/Logo'
import { theme } from '../../../theme';
import { refreshPage } from '../../../utils/window';

export default function Navbar({ prenom }) {
    return (
        <NavbarStyled>
            <Logo className='logo-order-page' onClick={refreshPage} />
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

            .logo-order-page {
                cursor: pointer;
            }

`;
