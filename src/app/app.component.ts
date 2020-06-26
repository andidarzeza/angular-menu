import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import {LeafletMenu} from './library/components/menu/models/LeafletMenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  title = 'mathlibrary';
  private mymap = null;
  menu: LeafletMenu = {
    layout: {
      position: 'bottom',
      initialItems: 70
    }
  };
  ngAfterViewInit(  ) {

      this.setUpMap();

  }

  setUpMap(): void {
    this.mymap = L.map('mapid').setView([51.505, -0.09], 13)
    const Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    Stadia_AlidadeSmoothDark.addTo(this.mymap);
  }

  onMouseEnter() {
    this.mymap?.doubleClickZoom.disable();
    this.mymap?.scrollWheelZoom.disable();
    this.mymap?.dragging.disable();
  }

  onMouseLeave() {
    this.mymap?.doubleClickZoom.enable();
    this.mymap?.scrollWheelZoom.enable();
    this.mymap?.dragging.enable();
  }

  manageClickedItem(item: any): void {
    const action = item.action;
    this.manageActions(action);
    console.log(item);
  }

  manageActions(action: string): void{
    switch (action) {
    }
  }

}
