import { useContext } from "react"
import GlobalContext from "./GlobalContext"
import Wrapper from "./Wrapper"

export const M = () => {
  return (
    <Wrapper>
      <h1>M</h1>
    </Wrapper>
  )
}

export const N = () => {
  const {
    state, setState
  } = useContext(GlobalContext)

  const onChangeText = (e) => {
    setState({
      value: e.target.value
    })
  }

  return (
    <Wrapper>
      <h1>N</h1>
      <h2>{state.value}</h2>
      <input value={state.value} onChange={onChangeText} />
    </Wrapper>
  )
}