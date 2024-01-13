import styled from "styled-components";
import { color,lineField } from "../styles/VarStyles";
import AreaGoalkeepers from "../styles/areaGoalkeepers";
import AreaPlayers from "../styles/AreaPlayers";
import CardPlayer from "./CardPlayer";


const HalfFieldStyled = styled.div`
    display: flex;
    flex-direction: ${props => (props.position === "left" ?"row":"row-reverse")};
    width: 600px;
    height: 700px;
    background-color: ${color.field};
    border-${props => (props.position === "left" ? "right" : "left")}: ${parseInt(lineField.width)/2}px solid  ${lineField.color};
`



const HalfField = (props)=>{
    const {position} = props
    return(
        <HalfFieldStyled position={position}>
            <AreaGoalkeepers>
                <CardPlayer/>
            </AreaGoalkeepers>
            <AreaPlayers>
                <CardPlayer/>
                <CardPlayer/>
                <CardPlayer/>
                <CardPlayer/>
            </AreaPlayers>

        </HalfFieldStyled>
    )
}

export default HalfField