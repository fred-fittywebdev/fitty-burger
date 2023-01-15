import { useState } from "react"

export default function LoginPage() {
    // state
    const [prenom, setPrenom] = useState("")

    // components
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Bonjour ${prenom}`)
        setPrenom("")
    }

    const handleChange = (event) => {
        setPrenom(event.target.value)
    }

    // affichage (render)
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input onChange={handleChange} value={prenom} type="text" name="text" id="text" placeholder="Entrez votre prénom..." required />
                <button>Accédez à votre espace</button>
            </form>
        </div>
    )
}
