export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min // You can remove the Math.floor if you don't want it to be an integer
}
