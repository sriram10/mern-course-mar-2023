// hooks are used to enhance functional components

import { useEffect, useState } from "react";

// let title = "FIRST";
function Day6App ({ count }) {
  console.log('Rendering Day6App');
  let [title, setTitle] = useState("FIRST");
  let [list, setList] = useState([]);
  let [text, setText] = useState("");
  
  useEffect(() => {
    console.log('useEffect One >> ', count);
    // setTitle("SECOND");
  }, []) // invoked only mounting if there is no dependency data
  
  useEffect(() => {
    console.log('useEffect Two >> ', count);
    // setTitle("SECOND");
  }, [count]) // invoked on mounting & whenever the count prop is changed

  return (
    <div>
      <h1>Day 6 - {title}</h1>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={"t"+index}>{item}</li>
            )
          })
        }
      </ul>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        setList([...list, text]);
      }}>Add</button>
      <button onClick={() => {
        setTitle(o => {
          console.log(o);
          return "SECOND Title"
        });
        setTitle(o => {
          console.log(o);
          return "THREE"
        });
        setTitle(o => {
          console.log(o);
          return "FOUR"
        });
        setList(oldState => [...oldState, "SECOND"]);
        setList(oldState => [...oldState, "THIRD"]);
        setList(oldState => [...oldState, "FOUR"]);
        setList(oldState => [...oldState, "FIVE"]);
      }}>Change Title</button>
    </div>
  )
}

export default Day6App;