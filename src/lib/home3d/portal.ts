import { Matrix4, PerspectiveCamera } from 'three'

// At full-screen size this similarity maps the world camera exactly onto the outer camera.
export function portalWorldMatrix(screen: Matrix4, worldCamera: PerspectiveCamera, fullScale: number, planeDistance: number) {
  return screen.clone().multiply(new Matrix4().makeScale(20/(planeDistance*fullScale),20/(planeDistance*fullScale),20/(planeDistance*fullScale)))
    .multiply(new Matrix4().makeTranslation(0,0,planeDistance)).multiply(worldCamera.matrixWorldInverse)
}
