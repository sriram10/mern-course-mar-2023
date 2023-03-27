import { useEffect, useState } from "react";

const useAuth = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    const u = localStorage.getItem("user");
    const s = localStorage.getItem("loggedIn");
    if (u?.length > 1 && s?.length === 1) {
      setResult({
        authorized: Boolean(Number(s)),
        user: JSON.parse(u)
      })
    }
  }, [])

  return result
}

export default useAuth;