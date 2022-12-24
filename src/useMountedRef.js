import { useRef } from 'react';
import { useIsomorphicEffect } from './useIsomorphicEffect';

export function useMountedRef() {
    const mounted = useRef(false);
    useIsomorphicEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    return mounted;
}
