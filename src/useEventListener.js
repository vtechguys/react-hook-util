import { useLatestRef } from "./useLatestRef";


export function useEventListener(eventName, handler, ref, eventOptions) {
    const handlerRef = useLatestRef(handler);

    useEffect(() => {
        const targetElement = ref?.current || window;

        if (!targetElement || !targetElement?.addEventListener) {
            return;
        }

        const listener = (e) => handlerRef.current(e);
        targetElement.addEventListener(eventName, listener, eventOptions)

        return () => {
            targetElement.removeEventListener(eventName, listener, eventOptions)
        };


    }, [eventName, ref, eventOptions]);
}