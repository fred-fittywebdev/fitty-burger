import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from '../../../theme'
import Main from "./Main";
import Navbar from "./Navbar";

export default function OrderPage() {
    // state
    // Récuperer le prénom envoyé dans l'Url par la LoginPage
    const { prenom } = useParams()

    // components

    // affichage (render)
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar prenom={prenom} />
                <Main />
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    background-color: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background: red;
        height: 95vh;
        width: 90%;
        max-width: 1400px;
        display: flex;
        flex-direction: column;

    }
`
