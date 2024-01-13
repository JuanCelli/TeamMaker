
import DragCardContainer from './DragCardContainer'
import DropCardContainer from './DropCardContainer'

DragCardContainer
DropCardContainer

const DndCard = ({children}) => {
  return (
    <>
        <DragCardContainer>
            <DropCardContainer>
                {children}
            </DropCardContainer>
        </DragCardContainer>
    </>
  )
}

export default DndCard