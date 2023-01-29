import LoginForm from "./LoginForm"

import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"
import { theme } from "../../../theme"

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo className={"logo-login-page"} />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

::before {
    content: "";
    background: url(${theme.images.heroBackground}) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

.logo-login-page {
    transform: scale(2.5);
    margin-bottom: 2.5rem;
}

`
