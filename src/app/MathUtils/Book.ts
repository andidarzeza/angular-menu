import {Comparable} from './interfaces/Comparable';
import {loopAndCheck} from './Utils/ObjectComparator';

export class Book implements Comparable<Book>{

  name: string;
  author: string;
  pages: number;
  genre: string;
  constructor(name:string, author: string, pages:number, genre: string) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
  }

  isEqual(book: Book): boolean {
    return loopAndCheck(Object.values(this), Object.values(book), true);
  }

}
