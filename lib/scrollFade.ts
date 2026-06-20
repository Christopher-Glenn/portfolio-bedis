export type ScrollFadeParams = {
  inStart?: number;
  inEnd?: number;
  outStart: number;
  outEnd: number;
  defaultOpacity?: number;
};

export function computeScrollOpacity(
  scrollY: number,
  {
    inStart = 0,
    inEnd = 0,
    outStart,
    outEnd,
    defaultOpacity = 1,
  }: ScrollFadeParams
) {
  if (inEnd && scrollY < inStart) return 0;
  if (inEnd && scrollY < inEnd) {
    return (scrollY - inStart) / (inEnd - inStart);
  }
  if (scrollY < outStart) return defaultOpacity;
  if (scrollY < outEnd) {
    return defaultOpacity - (scrollY - outStart) / (outEnd - outStart);
  }
  return 0;
}
