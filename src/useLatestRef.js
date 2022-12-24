import { useRef } from "react"
import { useIsomorphicEffect } from './useIsomorphicEffect';

export const useLatestRef = (value) => {
    const valueRef = useRef(value);
    useIsomorphicEffect(() => {
        valueRef.current = value;
    }, [value]);
    return valueRef;
};