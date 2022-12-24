import { useEventListener } from "./useEventListener";

export const useClickAnyWhere = (handler) => {
    const eventCallback = (event) => {
        handler(event);
    };
    useEventListener('click', eventCallback);
}