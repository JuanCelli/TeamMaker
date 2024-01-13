import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import HalfField from "./HalfField"
import styled from "styled-components";

import { lineField } from "../styles/VarStyles";

const FieldStyled = styled.div`
    border: solid ${lineField.width} white;
    display: flex;
`


const Field = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <FieldStyled>
          <HalfField position="left"/>
          <HalfField position="right"/>
      </FieldStyled>
    </DndProvider>
  )
}


export default Field