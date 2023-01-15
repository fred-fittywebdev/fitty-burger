import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
    // state
    // Récuperer le prénom envoyé dans l'Url par la LoginPage
    const { prenom } = useParams()

    // components

    // affichage (render)
    return (
        <div>
            <h1>Bonjour {prenom} </h1>
            <Link to='/'>
                <button>Déconnexion</button>
            </Link>
        </div>
    )
}
