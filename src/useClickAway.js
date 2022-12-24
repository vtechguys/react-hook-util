import { useEventListener } from "./useEventListener";

export const useClickAway = (
    ref,
    handler,
) => {

    const eventCallback = (event) => {
        const element = ref.current;

        if (!event || !element || el.contains((event).target)) { return };

        handler(event);
    };

    useEventListener('click', eventCallback);
};