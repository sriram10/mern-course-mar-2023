/**
 * Call it only once on mounting
 * and return true if its mounted and false if not
 */

import { useEffect, useRef } from "react";

const useIsMounted = () => {
  const isMounted = useRef(false);
  
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;  
    }
  }, [])

  return isMounted.current;
}

export default useIsMounted;