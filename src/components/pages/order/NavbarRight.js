import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function NavbarRight({ prenom }) {
    return (
        <NavbarRightStyled>
            Right
            <h1>Bonjour {prenom} </h1>
            <Link to='/'>
                <button>Déconnexion</button>
            </Link>
        </NavbarRightStyled>
    )
}

const NavbarRightStyled = styled.div`
  background-color: purple;

`;
