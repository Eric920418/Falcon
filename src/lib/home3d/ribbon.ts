// One continuous route per layout; scroll reveals the leading end along the curve.
export const ribbonPaths = {
  desktop: 'M-120 30 C30 0 210 50 300 200 S560 460 365 610 C210 735 25 640 65 490 C125 260 560 320 860 580 S1200 940 1540 790',
  mobile: 'M-150 30 C360 -20 1510 70 1540 280 C1570 470 180 410 170 620 C160 830 1320 850 1210 660 C1110 480 630 650 810 820 S1560 1020 150 1110',
}

export function ribbonScreenLength(path: SVGPathElement) {
  const length = path.getTotalLength(), matrix = path.getScreenCTM()
  if (!matrix) return length
  // Non-scaling strokes measure dashes in screen pixels, even when the SVG is stretched.
  let previous = path.getPointAtLength(0).matrixTransform(matrix), total = 0
  for (let i = 1; i <= 256; i++) {
    const point = path.getPointAtLength(length * i / 256).matrixTransform(matrix)
    total += Math.hypot(point.x - previous.x, point.y - previous.y)
    previous = point
  }
  return total
}
