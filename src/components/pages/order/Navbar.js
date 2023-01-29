import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function Navbar({ prenom }) {
    return (
        <NavbarStyled>
            <div className="left-side">Left</div>
            <div className='right-side'>
                Right
                <h1>Bonjour {prenom} </h1>
                <Link to='/'>
                    <button>Déconnexion</button>
                </Link>
            </div>
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

            .right-side {
                background-color: purple;
            }
`;
