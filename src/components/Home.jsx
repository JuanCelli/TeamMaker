import ContainerCenterColumn from "../styles/ContainerCenter"
import { color } from "../styles/VarStyles"
import Field from "./Field"

const Home = () => {
  return (
      <ContainerCenterColumn color={color.mainBgSecundary} >
          <Field />
      </ContainerCenterColumn>
  )
}

export default Home