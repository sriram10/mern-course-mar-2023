import { useContext } from "react"
import { M, N } from "./FourthLevelChildren"
import GlobalContext from "./GlobalContext"
import Wrapper from "./Wrapper"

export const X = () => {
  const {
    state
  } = useContext(GlobalContext);
  return (
    <Wrapper>
      <h1>X</h1>
      <h2>Value from context: {state.value}</h2>
      <h2>Value from context: {state.test}</h2>
    </Wrapper>
  )
}

export const D = () => {
  return (
    <Wrapper>
      <h1>D</h1>
    </Wrapper>
  )
}

export const E = () => {
  return (
    <Wrapper>
      <h1>E</h1>
      <M />
      <N />
    </Wrapper>
  )
}