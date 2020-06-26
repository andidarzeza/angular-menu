import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {menuItems} from './configurations/menuItems';
import {MenuItem} from './models/MenuItem';
import {cssClasses} from './configurations/cssClasses';
import {interval, Subject} from 'rxjs';
import {debounce, delay, throttle} from 'rxjs/operators';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('menuDiv', {static : true}) menuDiv;

  @Input() options;
  @Output() itemClicked = new EventEmitter();
  items: MenuItem[] = menuItems;
  itemsToShow: MenuItem[] = [];
  nextItem  = 0;
  hidden = false;
  previousItem = 0;
  cssClassObject = {
    arrows:{
      firstArrow: '',
      secondArrow: ''
    },
    menu: '',
    container: '',
    item: '',
    arrow: '',
    hider: ''
  };
  subject: Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.manageLayout(this.options?.layout);
    this.manageItems(this.options?.layout);
    this.menuDiv.nativeElement.addEventListener('mousewheel', this.onMousewheel.bind(this));
    // this.subject.pipe(
    //   throttle(() => {
    //     return interval(300);
    //   })
    // ).subscribe(
    //   (event: any) => {
    //     console.log(event);
    //     if(event.deltaY > 0) {
    //       this.next();
    //     } else if(event.deltaY < 0){
    //       this.previous();
    //     }
    //   }
    // )
  }

  previous(): void {
    if(this.previousItem !== -1) {
      this.itemsToShow.pop();
      this.itemsToShow.unshift(this.items[this.previousItem]);
      this.previousItem--;
      this.nextItem--;
    }
  }

  next(): void {
    if(this.nextItem<this.items.length) {
      this.itemsToShow.shift();
      this.itemsToShow.push(this.items[this.nextItem]);
      this.nextItem++;
      this.previousItem++;
    }
  }

  manageLayout(layout: any): void {
    switch (layout?.position) {
      case 'top': this.cssClassObject = cssClasses.horizontal.top;break;
      case 'bottom': this.cssClassObject = cssClasses.horizontal.bottom;break;
      case 'left': this.cssClassObject = cssClasses.vertical.left;break;
      case 'right': this.cssClassObject = cssClasses.vertical.right;break;
      default: break;
    }
  }

  manageItems(layout: any): void {
    this.nextItem = layout?.initialItems>=this.items.length ? this.items.length : layout?.initialItems;
    this.previousItem = -1;
    this.itemsToShow = this.items.slice(0, layout?.initialItems);
  }

  hide(): void {
    if(this.hidden) {
      const menu = document.getElementById('leafletMenuID');
      const container = document.getElementById('menuContainerID');
      if(this.options.layout?.position === 'top' || this.options.layout?.position === 'bottom'){
        menu.style.width = '100%';
        container.style.display = 'flex';
        this.hidden = false;
      }else{
        menu.style.height = '100%';
        container.style.display = 'block';
        this.hidden = false;
      }
    }else {
      const menu = document.getElementById('leafletMenuID');
      const container = document.getElementById('menuContainerID');
      if(this.options.layout?.position === 'top' || this.options.layout?.position === 'bottom'){
        menu.style.width = '24px';
        container.style.display = 'none';
        this.hidden = true;
      }else{
        menu.style.height = '24px';
        container.style.display = 'none';
        this.hidden = true;
      }
    }
  }
  manageClick(item: MenuItem): void{
    console.log(item);
    this.itemClicked.emit(item);
  }

  onMousewheel(event) {
    this.subject.next(event);

  }
}
