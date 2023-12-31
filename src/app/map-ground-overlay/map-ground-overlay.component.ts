import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-ground-overlay',
  templateUrl: './map-ground-overlay.component.html',
  styleUrls: ['./map-ground-overlay.component.css']
})
export class MapGroundOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 8, lng: 12};
  zoom = 1;

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 2,
    north: 10,
    south: -10,
    west: -10,
  };
}
