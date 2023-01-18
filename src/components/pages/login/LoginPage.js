import LoginForm from "./LoginForm"

import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
background: url("/images/burger-background.jpg") rgba(0, 0, 0, 0.7);
background-size: cover;
background-position: center;
background-blend-mode: darken;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
`
