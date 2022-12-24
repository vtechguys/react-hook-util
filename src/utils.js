export const safeJSONParse = (json, defaultVaule) => {
    try {
        return JSON.parse(json);
    } catch (e) {
        console.log('Unable to parse json', e);
        return defaultVaule;
    }
};

export const safeJSONStringify = (value, defaultValue) => {
    try {
        return JSON.stringify(value);
    } catch (e) {
        console.log('Unable to stringify json', e);
        return defaultValue;
    }
};

export const isBrowser = () => Boolean(typeof window !== "undefined" && window.document && window.document.createElement);