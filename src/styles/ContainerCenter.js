import styled from "styled-components";

const ContainerCenterColumn = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 1em;
    background-color: ${props => props.color} ;
`

export default ContainerCenterColumn