import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display : any;
  center: google.maps.LatLngLiteral = {lat: 28.635903, lng: 77.360329};
  zoom = 13;

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null)
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }
}
