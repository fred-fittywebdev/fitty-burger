import React from 'react'
import styled from 'styled-components';

export default function Main() {
    return (
        <MainStyled className="main">Main</MainStyled>
    )
}

const MainStyled = styled.main`
    background: green;
    flex: 1;
`;
