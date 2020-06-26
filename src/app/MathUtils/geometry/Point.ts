import {Element} from '../Element';
import {Comparable} from '../interfaces/Comparable';
import {Measurable} from '../interfaces/Measurable';

export class Point implements Element, Comparable<Point>{
  private readonly x: number = 0;
  private readonly y: number = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  isEqual(point: Point): boolean {
    return ((this.x === point.getX()) && (this.y === point.getY()));
  }
  getX(): number {
    return this.x;
  }
  getY(): number {
    return this.y;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

}
