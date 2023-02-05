import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Main() {
    return (
        <MainStyled className="main"></MainStyled>
    )
}

const MainStyled = styled.main`
    background-color: ${theme.colors.background_white};
    flex: 1;

    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} ;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
