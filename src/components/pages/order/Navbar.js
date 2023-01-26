import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function Navbar({ prenom }) {
    return (
        <NavbarStyled>
            Navbar
            <h1>Bonjour {prenom} </h1>
            <Link to='/'>
                <button>Déconnexion</button>
            </Link>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
            background: blue;
            height: 10vh;
`;
