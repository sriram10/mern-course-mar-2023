import { useCallback, useState, useMemo } from "react"

const HooksExample = () => {
  const [data, setData] = useState(1);
  const [count, setCount] = useState(0);

  const onChange = () => {
    setData(data+1)
  }

  const handleCount = () => {
    setCount(count+1)
  }

  const add = useCallback(() => {
    console.log('Count Value', count)
  }, [count])

  const sumAllNumbersTillOneBillion = useMemo(() => {
    console.log('Calculating Sum...', count)
    let sum = 0;
    for (let i = 1; i <= 100000000; i++) {
      sum += i;
    }
    console.log('Sum Value:', sum)
    return sum;
  }, [count])

  return (
    <div>
      <h1>Hooks Sample: {data} {sumAllNumbersTillOneBillion}</h1>
      <button onClick={onChange}>Update Value</button>
      <button onClick={handleCount}>Inc Count</button>
      <button onClick={add}>Show Add Content</button>
    </div>
  )
}

export default HooksExample;