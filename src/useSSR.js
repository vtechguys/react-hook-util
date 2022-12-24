import { useEffect, useState } from "react";
import { isBrowser } from "./utils";

export const useSSR = () => {
    const [browser, setBrowser] = useState(isBrowser());

    useEffect(() => {
        setBrowser(isBrowser());
    }, []);

    return {
        isBrowser: browser,
        isServer: !browser
    }
};