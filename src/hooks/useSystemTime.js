import { useEffect, useRef, useState } from "react"

const useSystemTime = () => {
  const interval = useRef(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => {
      clearInterval(interval.current);
    }
  }, [])

  return time.toLocaleTimeString();
}

export default useSystemTime;