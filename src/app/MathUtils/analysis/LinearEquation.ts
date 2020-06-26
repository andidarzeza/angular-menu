import {Point} from '../geometry/Point';
import {Equation} from './Equation';
import {Solvable} from './interfaces/Solvable';
import {notNull} from '../Utils/NotNull';
import {LinearEquationCase} from './enums/LinearEquationCase';

export class LinearEquation extends Equation implements Solvable{
  private readonly a: number = 1;
  private readonly b: number = 0;
  private readonly case: LinearEquationCase;
  private constructor(a?: number, b?: number, cases?: LinearEquationCase) {
    super('LINEAR');
    this.a = a;
    this.b = b;
    this.case = cases;
  }

  getA(): number {
    return this.a;
  }
  getB(): number {
    return this.b;
  }

  getCase(): LinearEquationCase {
    return this.case;
  }

  solveForX(x: number): Point{
    if(this.a === 0){
      return new Point(x, null);
    }else{
      const y = this.a * x + this.b;
      return new Point(x, y);
    }

  }

  solveForY(y: number): Point {
    if(this.a !== 0) {
      const x = (y - this.b) / this.a;
      return new Point(x, y);
    } else {
      return new Point(this.b, null);
    }
  }

  toString(): string {
   if(this.a === null) {
     return `x = ${this.b}`;
   }else{
     const equation = `y = ${this.a}x + ${this.b}`;
     return equation;
   }
  }

  static equationFromParameter(a: number, b:number): LinearEquation {
    if(notNull(a)) {
      if(notNull(b)) {
        return new LinearEquation(a, b, LinearEquationCase.YCASE);
      } else {
        return null;
      }
    } else {
      if(b) {
        return new LinearEquation(null, b, LinearEquationCase.XCASE);
      } else
        return null;
    }
  }

  static equationFromPoints(point1: Point, point2: Point): LinearEquation {
    if(notNull(point1, point2)) {
      if(point2.getX() === point1.getX()) {
        //special case: x = point2.getX();
        return new LinearEquation(null, point1.getX(), LinearEquationCase.XCASE);
      } else {
        const slope = (point2.getY() - point1.getY()) / (point2.getX() - point1.getX());
        const b = point1.getY() - slope * point1.getX();
        return new LinearEquation(slope, b, LinearEquationCase.YCASE);
      }
    } else {
      return null;
    }
  }



}
