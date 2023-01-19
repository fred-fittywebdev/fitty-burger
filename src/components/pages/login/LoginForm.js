import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { BsPersonCircle } from 'react-icons/bs'

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
                <hr />
                <h2>Connectez-vous</h2>
            </div>
            <div className='form-wrapper'>
                <div className='input-container'>
                    <BsPersonCircle className='icon' />
                    <input onChange={handleChange} value={prenom} type="text" name="text" id="text" placeholder="Entrez votre prénom" required />
                </div>
                <button>Accédez à mon espace</button>
            </div>
        </LoginFormStyled>
    )
}

// CSS styled-components
const LoginFormStyled = styled.div`
    border: 3px solid rebeccapurple; 
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: "Amatic SC", cursive;

    hr {
        border: 1.5px solid #f56a2c;
        margin-bottom: 4px;
    }

    h1{
        color: white;
        font-size: 48px;
    }

    h2 {
        color: 8e8b8b;
        margin: 20px 10px 10px;
        color: white;
        font-size: 36px;
    }

    .input-container {
        border: 1 px solid sandybrown;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        .icon {
            color: #93a2b1;
            font-size: 15px;
            margin-right: 8px;
        }

        input {
            border: none;
            font-size: 15px;
            color: #17161a;
        }

        &::placeholder {
            background: white;
            color: lightgrey;
        }
    }
`
