import React, { useEffect, useRef } from 'react'

export default function useTimeout(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function execute() {
      savedCallback.current();
    }

    let id = setTimeout(execute, delay);
    return () => clearTimeout(id);
  }, []);
}