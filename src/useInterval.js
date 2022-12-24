import { useLatestRef } from "./useLatestRef"

export function useInterval(callback, delay) {
    const savedCallback = useLatestRef(callback);
    useEffect(() => {

        if (!delay && delay !== 0) {
            return
        }

        const id = setInterval(() => savedCallback.current(), delay)

        return () => clearInterval(id)
    }, [delay])
}