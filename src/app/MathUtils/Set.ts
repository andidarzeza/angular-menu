import {Element} from './Element';
import {Comparable} from './interfaces/Comparable';
import {Comparator} from './Comparator';

export class Set<T>{
  private readonly elements: T[];
  private readonly comparator: Comparator<T>;
  constructor(array?: T[]) {
    this.elements = array;
    this.comparator = new Comparator<T>();
  }

  hasElement(element: T): boolean {
    for (let i = 0; i < this.elements.length; i++) {
      if(this.comparator.areEqual(this.elements[i], element)) {
        return true;
      }
    }
    return false;
  }

  addElement(element: T): void {
    this.elements.push(element);
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  getElements(): T[] {
    return this.elements;
  }

}
