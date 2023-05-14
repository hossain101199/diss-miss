import { useEffect, useRef } from "react";
type HandleClose = () => void;
const useOutsideClick = (handleClose: HandleClose) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClose]);

  return ref;
};

export default useOutsideClick;
