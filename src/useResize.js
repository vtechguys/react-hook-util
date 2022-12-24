import { useEffect } from "react"

export const useResize = (callback, immediatelyInvoke) => {
    useEffect(() => {
        const fn = () => callback();

        if (immediatelyInvoke) {
            fn();
        }
        window.addEventListener("resize", fn);

        return () => window.removeEventListener("resize", fn);
    }, []);
};