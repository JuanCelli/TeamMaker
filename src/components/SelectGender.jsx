import {SelectStyled,OptionStyled} from "../styles/SelectStyled"



const SelectGender = () => {
  return (
    <SelectStyled id="selectGender" name="selectGender">
        <OptionStyled value="male">M</OptionStyled>
        <OptionStyled value="female">F</OptionStyled>
    </SelectStyled>
  )
}

export default SelectGender