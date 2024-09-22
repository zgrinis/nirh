export function interpolate(
    value: number,
    fromMin: number,
    fromMax: number,
    toMin: number,
    toMax: number
): number {
    // Calculate the normalized value within the source interval (fromMin to fromMax)
    const normalized = (value - fromMin) / (fromMax - fromMin);

    // Scale the normalized value to the target interval (toMin to toMax)
    return toMin + normalized * (toMax - toMin);
}
