import styled from "styled-components";
import { color, font } from "./VarStyles";


export const SelectStyled = styled.select`
    width: 100%;
    text-align: center;
    align-self: center;
    border-color:#00000000;
    background-color: #00000000;
    /* border-radius: 1px; */
    margin: 0 2px;
    color: ${font.fontDefault.color};
    font-size:  ${props => props.fontSize ? props.fontSize : font.fontProperty.size};
`

export const OptionStyled = styled.option`
        text-align: center;
        background-color: ${color.secundary};
        color: ${font.fontDefault.color};
        font-size:  ${props => props.fontSize ? props.fontSize : font.fontProperty.size};
        border: 1px solid ${color.secundary}
`