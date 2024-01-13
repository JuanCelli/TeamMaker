import styled from "styled-components";
import { color, font } from "./VarStyles";



const InputTextStyled = styled.input`
    width: 100%;
    text-align: ${props => props.textalign ? props.textalign : "start"};
    align-self: center;
    border-color:#00000000;
    background-color: ${color.secundary};
    border-radius: 1px;
    margin: 0 4px;
    color: ${font.fontDefault.color};
    font-size:  ${props => props.fontSize ? props.fontSize : font.fontProperty.size};
`

export default InputTextStyled