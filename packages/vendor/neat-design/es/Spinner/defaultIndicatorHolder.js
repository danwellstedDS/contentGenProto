var globalIndicator = null;
export function setHolder(indicator) {
  globalIndicator = indicator;
}
export function getHolder() {
  return globalIndicator;
}