import React from 'react'
import styled from 'styled-components';
import NavbarRight from './NavbarRight';

export default function Navbar({ prenom }) {
    return (
        <NavbarStyled>
            <div className="left-side">Left</div>
            <NavbarRight prenom={prenom} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
            background: blue;
            height: 10vh;
            display: flex;
            justify-content: space-between;

            .left-side {
                background-color: pink;
            }

`;
