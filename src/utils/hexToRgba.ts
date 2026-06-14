
// hex to rgba converter

export const hexToRgba = (hex: string, alpha: number = 1) => {

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r},${g},${b},${alpha})`;
};

/**
 * 
 * @param hex The css root variable
 * @param alpha Alpha value
 */
export const hexVarToRgba = (hex: string, alpha: number = 1) => {
    const colorFromVar = getComputedStyle(document.documentElement).getPropertyValue(hex).trim();
    return hexToRgba(colorFromVar, alpha)
}
