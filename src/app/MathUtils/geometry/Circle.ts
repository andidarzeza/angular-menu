import {Set} from '../Set';
import {Point} from './Point';
import {Measurable} from '../interfaces/Measurable';
import {Intersectable} from '../interfaces/Intersectable';

export class Circle implements Measurable<Point>, Intersectable<Circle>{
  private readonly center: Point = new Point(0, 0);
  private readonly radius: number = 1;
  private readonly diameter: number = 2;
  constructor(center?: Point, radius?: number) {
    if(center === null || center === undefined || radius === null || radius === undefined) {

    } else {
      this.center = center;
      this.radius = radius;
      this.diameter = this.radius * 2;
    }

  }
  getCenter(): Point {
    return this.center;
  }

  getRadius(): number {
    return this.radius;
  }

  getDiameter(): number {
    return this.diameter;
  }

  distance(from: Point, to: Point): number {
    if(this.hasPoint(from) && this.hasPoint(to)) {
      const distance = Math.sqrt(Math.pow((from.getX() - to.getX()), 2) + Math.pow((from.getY() - to.getY()), 2));
      return distance;
    } else {
      if(!this.hasPoint(from)) console.error(`Point, ${from.toString()} is is not part of the circle.`);
      if(!this.hasPoint(to)) console.error(`Point, ${to.toString()} is is not part of the circle.`);
      return -1
    }
  }

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(point: Point): boolean {
    const fromCenterToPoint = Math.sqrt(Math.pow((this.center.getX() - point.getX()), 2) + Math.pow((this.center.getY() - point.getY()), 2));
    return fromCenterToPoint === this.radius;
  }

  intersects(shape: Circle): Point[] {
    return [];
  }



}
