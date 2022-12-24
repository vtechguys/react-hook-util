import { useIsomorphicEffect } from './useIsomorphicEffect';

export function useDocumentTitle(title) {
    useIsomorphicEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = title;
        }
    }, [title]);
}