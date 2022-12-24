import { useEffect } from "react";
import { useSafeDispatch } from "./useSafeDispatch";
import { safeJSONParse, safeJSONStringify } from "./utils";

export function useLocalStorageState(
    key,
    defaultValue
) {
    const [state, _setState] = useState(() => safeJSONParse(localStorage?.getItem?.(key, defaultValue), defaultValue));
    const setSafeDispatch = useSafeDispatch(_setState);
    useEffect(() => {
        const val = safeJSONStringify(state);
        set(key, val);
        localStorage?.setItem?.(key, val);
    }, [setSafeDispatch, key, state]);
    return [state, setSafeDispatch];
}