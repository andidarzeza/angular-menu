import {Solvable} from './interfaces/Solvable';

export class Equation{
  private readonly type;
  constructor(type: string) {
    this.type = type;
  }

  getType(): string {
    return this.type;
  }
}
