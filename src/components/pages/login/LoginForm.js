import React, { useState } from 'react'

export default function LoginForm() {
    // state
    const [prenom, setPrenom] = useState("")

    // components
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Bonjour ${prenom}`)
        setPrenom("")
    }

    // affichage
    const handleChange = (event) => {
        setPrenom(event.target.value)
    }
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input onChange={handleChange} value={prenom} type="text" name="text" id="text" placeholder="Entrez votre prénom..." required />
            <button>Accédez à votre espace</button>
        </form>
    )
}
