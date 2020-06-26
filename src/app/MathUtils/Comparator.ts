import {loopAndCheck} from './Utils/ObjectComparator';

export class Comparator<T> {
  areEqual(value1:T, value2:T) {
    if(value1 && value2) {
      if(
        (typeof(value1) === 'number' && typeof(value2) === 'number') ||
        (typeof(value1) === 'string' && typeof(value2) === 'string') ||
        (typeof(value1) === 'boolean' && typeof(value2) === 'boolean')
      ) {
        return value1 === value2;
      } else {
        return loopAndCheck(Object.values(value1), Object.values(value2), true);
      }
    } else return false;
  }
}

