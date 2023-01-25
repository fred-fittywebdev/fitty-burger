import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

export default function PasswordInput({ value, Icon, onChange, ...extraProps }) {
    return (
        <div>
            <PasswordInputStyled>
                <input value={value} onChange={onChange} {...extraProps} />
                {Icon && Icon}
            </PasswordInputStyled>
        </div>
    )
}

const PasswordInputStyled = styled.div`
        background-color: #fff;
        border-radius: ${theme.borderRadius.round};
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        .icon {
            color: ${theme.colors.greySemiDark};
            font-size: ${theme.fonts.size.P0};
            margin-right: 8px;
        }

        input {
            border: none;
            font-size: ${theme.fonts.size.P0};
            color: ${theme.colors.dark};
            width: 100%;

            &::placeholder {
            background: white;
            color: ${theme.colors.greyMedium};
        }
        }

        
`;
