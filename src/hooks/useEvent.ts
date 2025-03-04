import { useCallback, useEffect, useRef } from "react";

/**
 * @example
 * const handleClick = useEvent((e: MouseEvent) => console.log(e.clientX));
 */

function useEvent<Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
): (...args: Args) => Return {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: Args): Return => {
    return callbackRef.current(...args);
  }, []);
}

export default useEvent;
