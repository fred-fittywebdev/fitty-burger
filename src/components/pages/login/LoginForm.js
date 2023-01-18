import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function LoginForm() {
    // state
    const [prenom, setPrenom] = useState("")
    // Forcer la redirection lorsque on entre le prénom ( penser a modifier l'url dans Route sur app.js)
    const navigate = useNavigate()

    // components
    const handleSubmit = (event) => {
        event.preventDefault()
        setPrenom("")
        navigate(`order/${prenom}`)
    }

    // affichage
    const handleChange = (event) => {
        setPrenom(event.target.value)
    }
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <br />
                <h2>Connectez-vous</h2>
            </div>
            <div className='form-wrapper'>
                <input onChange={handleChange} value={prenom} type="text" name="text" id="text" placeholder="Entrez votre prénom" required />
                <button>Accédez à mon espace</button>
            </div>
        </LoginFormStyled>
    )
}

// CSS styled-components
const LoginFormStyled = styled.form`
    border: 3px solid rebeccapurple; 
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    h1{
        text-decoration: underline;
        color: ${theme.colors.red};
    }
`
