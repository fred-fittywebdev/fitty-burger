import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Profile from './Profile';

export default function NavbarRight({ prenom }) {
    return (
        <NavbarRightStyled prenom={prenom}>
            {/*<div className="admin-btn">Admin button</div>*/}
            <Profile prenom={prenom} />
        </NavbarRightStyled>
    )
}

const NavbarRightStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

    /*.admin-btn {
        background-color: lightblue;
    }*/

    .profile {
        background-color: yellow;
    }
`;
