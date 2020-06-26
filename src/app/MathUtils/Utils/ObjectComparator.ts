import {isBoolean} from 'util';

export function loopAndCheck(aEntries: any, bEntries: any, equal: boolean): boolean {
  for (let i = 0; i < aEntries.length; i ++) {
    if ((typeof(aEntries[i]) === 'string' && typeof(bEntries[i]) === 'string') || (typeof(aEntries[i]) === 'number' && typeof(bEntries[i]) === 'number')
      || (typeof(aEntries[i]) === 'boolean' && typeof(bEntries[i]) === 'boolean')) {
      if (aEntries[i] === bEntries[i]) {
        console.log(aEntries[i], ' = ', bEntries[i]);
      }else {
        equal = false;
      }
    }else {
      equal = this.loopAndCheck(Object.values(aEntries[i]), Object.values(bEntries[i]), equal);
    }
  }
  return equal;
}

