import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { BsPersonCircle } from 'react-icons/bs'
// import { BsFillKeyFill } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'
import TextInput from '../../reusable-ui/TexInput'
// import PasswordInput from '../../reusable-ui/PasswordInput'
import PrimaryButton from '../../reusable-ui/PrimaryButton'

export default function LoginForm() {
    // state
    const [prenom, setPrenom] = useState("")
    const [password, setPassword] = useState("")
    // Forcer la redirection lorsque on entre le prénom ( penser a modifier l'url dans Route sur app.js)
    const navigate = useNavigate()

    // components
    const handleSubmit = (event) => {
        event.preventDefault()
        setPrenom("")
        if (password === "admin") {
            navigate(`order/${prenom}`)
            setPassword("")
        }

    }

    // affichage
    const handleChange = (event) => {
        setPrenom(event.target.value)
    }

    // const passwordChange = (event) => {
    //     setPassword(event.target.value)
    // }


    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <hr />
                <h2>Connectez-vous</h2>
            </div>
            <div>
                <TextInput value={prenom} onChange={handleChange} placeholder={"Entrez votre prénom"} required Icon={<BsPersonCircle className='icon' />} />
                {/* <PasswordInput type={"password"} onChange={passwordChange} value={password} placeholder={"Entrez votre mot de passe"} required Icon={<BsFillKeyFill className='icon' />} /> */}
                <PrimaryButton label={"Accéder à mon espace"} Icon={<IoChevronForward className='icon' />} />
            </div>
        </LoginFormStyled>
    )
}

// CSS styled-components
const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    padding: 2.5rem ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Amatic SC", cursive;

    hr {
        border: 1.5px solid ${theme.colors.sectionSeparator};
        margin-bottom: ${theme.gridUnit * 5}px;
    }

    h1{
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: 36px;
    }

    .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: ${theme.fonts.size.P0};
                margin-left: 10px;
        }


`
