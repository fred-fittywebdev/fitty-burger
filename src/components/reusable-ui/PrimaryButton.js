import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButtonSt({ label, Icon }) {
    return (
        <PrimaryButtonStyled >
            <span>{label}</span>
            {Icon && Icon}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
            width: 100%;
            border: solid 1px red;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            position: relative;
            white-space: nowrap;
            text-decoration: none;
            line-height: 1;

            padding: 18px 24px;
            border-radius: 5px;
            font-size: ${theme.fonts.size.P0};
            font-weight: 800;
            color: white;
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};

            &:hover:not(:disabled) {
                background-color: ${theme.colors.white};
                color: ${theme.colors.primary};
                border: ${theme.colors.primary};
                transition: all 200ms ease-out;
            }

            &:active {
                color: ${theme.colors.white};
                background-color: ${theme.colors.primary};
                border: 1px solid ${theme.colors.primary};
            }

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
`;
