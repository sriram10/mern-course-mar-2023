import { useContext, useEffect, useRef, useState } from "react"
import GlobalContext from "./GlobalContext"
import { D, E, X } from "./ThirdLevelChildren"
import Wrapper from "./Wrapper"

export const B = () => {
  return (
    <Wrapper>
      <h1>B</h1>
      <X />
    </Wrapper>
  )
}

export const C = () => {
  // const { setState } = useContext(GlobalContext)
  let a = 0;
  let b = useRef(0);

  const [render, setRender] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   a = a+1;
    //   b.current = b.current + 1;
    //   console.log(a, b.current);
    // }, 1000)
  },[])

  // const handeChange = (e) => {
  //   setState({
  //       test: e.target.value
  //     })
  // }

  return (
    <Wrapper>
      <h1>C</h1>
      <button onClick={() => setRender(r => !r)}>Rerender: {render}</button>
      <h2>Value of a: {a}</h2>
      <h2>Value of b: {b.current}</h2>
      {/* <input type="text" onChange={handeChange} /> */}
      <D />
      <E />
    </Wrapper>
  )
}