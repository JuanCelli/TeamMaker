import { useDrag } from "react-dnd"
import { ItemTypes } from "./ItemTypes"




const DragCardContainer = ({children}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.CARDPLAYERS,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))

    return (
        <div ref={drag} > {children} </div>
    )
}

export default DragCardContainer