import { useContext, useState } from "react"
import GlobalContext, { StateProvider } from "./GlobalContext"
import { B, C } from "./SecondLevelChildren"
import Wrapper from "./Wrapper"

const A = () => {
  return (
    <StateProvider>
      <Wrapper>
        <h1>A</h1>
        <B />
        <C />
      </Wrapper>
    </StateProvider>
  )
}

export default A;