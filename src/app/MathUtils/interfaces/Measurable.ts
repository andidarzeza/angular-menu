export interface Measurable<T> {
  distance(from: T, to: T): number;
  area(): number;
  perimeter(): number;
}
