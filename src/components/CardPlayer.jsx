import styled from "styled-components"
import InputStyled from "../styles/InputStyled"
import { border, color, font } from "../styles/VarStyles"
import SelectGender from "./SelectGender"
import ImgPlayerStyled from "../styles/ImgPlayerStyled"
import { useState } from "react"
import DndCard from "../dnd/DndCard"


const CardPlayer = () => {
    const [name, setName] = useState("Name")
    const [score, setScore] = useState(3)
    const [gender, setGender] = useState("male")

    const handleChangeName = (event) =>{
        setName(event.target.value)
    }
    const handleChangeScore = (event) =>{
        setScore(parseFloat(event.target.value))
    }
    const handleChangeGender = (event) =>{
        setGender(event.target.value)
    }

    return (
        <AreaPlayer>
                <DndCard>
                    <CardContainerStyled>
                        <ImgPlayerStyled src={`https://ui-avatars.com/api/?name=${name}&background=random`} alt={`Foto de ${name}`} />

                        <PanelPropertysStyled>
                            <InputStyled name="namePlayer" type="text" value={name} fontSize={font.fontName.size} textalign={"center"} onChange={handleChangeName}/>

                            <PropertyStyled>
                                <label htmlFor="scorePlayer">Score:</label>
                                <InputStyled id="scorePlayer" name="scorePlayer" type="number" value={score} min="1" max="5" step="0.1"  onChange={handleChangeScore}/>
                            </PropertyStyled>

                            <PropertyStyled>
                                <label htmlFor="selectGender">Gender:</label>
                                <SelectGender value={gender} onChange={handleChangeGender}/>
                            </PropertyStyled>
                        </PanelPropertysStyled>

                    </CardContainerStyled>
                </DndCard>
        </AreaPlayer>
    )
}

const CardContainerStyled = styled.div`
    color: ${font.fontDefault.color};
    font-size: ${font.fontDefault.size};
    box-sizing: border-box;
    width: 120px;
    height: 200px;
    border-radius: ${border.borderRadiusMain};
    display: flex;
    background-color: ${color.primary};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    padding: 1em;
`

const AreaPlayer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PanelPropertysStyled = styled.div`
    background-color: ${color.secundary};
    border-radius: ${border.borderRadiusMain};
    width: 100%;
    height: auto;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5em 1em;
    :nth-child(){
        margin: 5px 0px;
    }
`

const PropertyStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 5px 0px;
`

export default CardPlayer