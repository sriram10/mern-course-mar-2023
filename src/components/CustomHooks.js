import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useIsMounted, useSystemTime } from "../hooks";

const CustomHooks = () => {
  const isMounted = useIsMounted();
  const [count, setCount] = useState(0);
  const time = useSystemTime()

  useEffect(() => {
    console.log('useEffect One >> ', count, isMounted);
  }, [count])

  return (
    <div>
      <h1>Custom Hooks (count: {count})</h1>
      <h1>{time}</h1>
      <h2>Mount Status: {isMounted ? 'Mounted' : 'Not yet'}</h2>
      <Button onClick={() => setCount(c => c+1)}>
        Count
      </Button>
    </div>
  )
}

export default CustomHooks;