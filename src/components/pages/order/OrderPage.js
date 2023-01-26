import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from '../../../theme'

export default function OrderPage() {
    // state
    // Récuperer le prénom envoyé dans l'Url par la LoginPage
    const { prenom } = useParams()

    // components

    // affichage (render)
    return (
        <OrderPageStyled>
            <div className="container">
                <div className="navbar">
                    Navbar
                    <h1>Bonjour {prenom} </h1>
                    <Link to='/'>
                        <button>Déconnexion</button>
                    </Link>
                </div>
                <div className="main">Main</div>
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
        width: 1400px;
        display: flex;
        flex-direction: column;

        .navbar {
            background: blue;
            height: 10vh;
        }

        .main {
            background: green;
            flex: 1;
        }
    }
`
