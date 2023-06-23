import { Component, OnInit } from '@angular/core';
import { AlllocationsService } from '../services/alllocations.service';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})
export class MapMarkerComponent implements OnInit {

  constructor(private _location: AlllocationsService) { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 28.635903, lng: 77.360329};
  zoom = 13;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPositions.push(event.latLng.toJSON());
   // this._location.alllocation.push(event.latLng)
   console.log(this.markerPositions);
  }
}
