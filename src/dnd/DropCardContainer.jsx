import { useDrop } from "react-dnd"
import { ItemTypes } from "./ItemTypes"


const DropCardContainer = ({children}) => {


    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARDPLAYERS,
        drop: () => console.log("ASDAS"),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }))


    return (
        <div ref={drop}>{children}</div>
    )
}

export default DropCardContainer