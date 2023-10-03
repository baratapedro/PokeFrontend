import { useRef, useEffect } from "react";


export const useOutsideClick = (callback: (isOpen: boolean, mode: string) => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Element)) {
        callback(false, '');
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [callback]);

  return ref;
};