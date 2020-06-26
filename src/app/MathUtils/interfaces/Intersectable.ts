import {Point} from '../geometry/Point';

export interface Intersectable<T> {
  intersects(shape: T): Point[];
}
