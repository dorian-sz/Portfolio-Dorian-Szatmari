import { useEffect } from "react";

export const useTitle = (pageName) => {
  useEffect(() => {
    document.title = `${pageName} | Dorian Szatmari`;
  }, [pageName]);
};
