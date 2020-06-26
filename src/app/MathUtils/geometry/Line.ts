import {Point} from './Point';
import {LinearEquation} from '../analysis/LinearEquation';

export class Line{
  private readonly equation: LinearEquation;

  constructor(equation: LinearEquation) {
    this.equation = equation;
  }

  static fromTwoPoints(point1: Point, point2: Point) {
    return new Line(LinearEquation.equationFromPoints(point1, point2));
  }

  static fromParameters(a: number, b: number) {
    return new Line(LinearEquation.equationFromParameter(a, b));
  }

  getEquation(): LinearEquation {
    return this.equation;
  }

  intersects(line: Line): Point {
    const lineEquation = line.getEquation();
    if(lineEquation.getA() === null || this.equation.getA() === null) {
      if(lineEquation.getA() === null) {
        const y = this.equation.getA() * lineEquation.getB() + this.equation.getB()
        return new Point(lineEquation.getB(), y);
      }else if(this.equation.getA() === null) {
        const y = lineEquation.getA()*this.equation.getB() + lineEquation.getB();
        return new Point(this.equation.getB(), y);
      }else {
        if (lineEquation.getB() === this.equation.getB()) console.info("Same Line, infinite intersection points.");
        else console.info("No intersection Points");
        return null;
      }
    } else {
      if(this.equation.getA() === lineEquation.getA()) {
        if(this.equation.getB() === lineEquation.getB()) console.info("Same Line, infinite intersection points.");
        else console.info("Parallel lines, no intersection points");
        return null;
      } else {
        const x = (this.equation.getB() - line.getEquation().getB()) / (line.getEquation().getA() - this.equation.getA());
        const y = (line.getEquation().getA()) * x + line.getEquation().getB();
        const point = new Point(x, y);
        console.info(`Intersecting lines at point: ${point.toString()}`);
        return point;
      }

    }
  }

  overlap(line: Line): boolean {
    console.log(line.getEquation().toString());
    console.log(this.equation.toString());
    const lineEquation: LinearEquation = line.getEquation();
    if(lineEquation.getA() === null || this.equation.getA() === null) {
      if(lineEquation.getA() === null && this.equation.getA()) {
        return false;
      } else if(this.equation.getA() === null && lineEquation.getA()) {
        return false;
      } else {
        if(this.equation.getB() === lineEquation.getB()) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if(lineEquation.getA() === this.equation.getA() && lineEquation.getB() === this.equation.getB()) {
        return true
      } else {
        return false;
      }
    }
  }

  isParallel(line: Line): boolean {
    console.log(line.getEquation().toString());
    console.log(this.equation.toString());
    const lineEquation = line.getEquation();



    if(this.equation.getA() === null || lineEquation.getA() === null) {
      if(this.equation.getA() === null && lineEquation.getA() !== null) {
        //equation: x = equation.getB() and lineEquation is of form y = ax + b;
        return false;
      } else if(lineEquation.getA() === null && this.equation.getA()) {
        return false;
      } else {;
        return true;
      }
    } else {
      if(this.equation.getA() === lineEquation.getA()) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }


}
