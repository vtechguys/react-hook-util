import { useEffect } from "react";
import { useLatestRef } from "./useLatestRef"

export function useTimeout(callback, delay) {
    const savedCallback = useLatestRef(callback);

    useEffect(() => {
        if (!delay && delay !== 0) {
            return
        }

        const id = setTimeout(() => savedCallback.current(), delay)

        return () => clearTimeout(id)
    }, [delay])
}
