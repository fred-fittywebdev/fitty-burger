import LoginForm from "./LoginForm"

import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"

export default function LoginPage() {
    // affichage (render)
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
background-color: lavender;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
