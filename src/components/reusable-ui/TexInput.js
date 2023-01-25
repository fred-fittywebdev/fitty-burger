import styled from "styled-components";
import { theme } from "../../theme";




export default function TextInput({ value, onChange, Icon, ...extraProps }) {
    return (
        <div>
            <InputStyled>
                {Icon && Icon}
                <input onChange={onChange} value={value} {...extraProps} />
            </InputStyled>
        </div>
    )
}


const InputStyled = styled.div`
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