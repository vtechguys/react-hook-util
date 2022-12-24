import { useCallback } from "react";
import { useMountedRef } from "./useMountedRef"

export function useSafeDispatch(dispatch) {
    const mounted = useMountedRef();
    // identity of dispatch function is gaurateed to be
    // preserved by react still we do
    // [Reason] rule of hooks and idenfity of dispatch remain same durin renders
    return useCallback(
        (value) => {
            if (mounted.current) {
                dispatch(value);
            }
        },
        [dispatch]
    );
}