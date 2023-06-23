import { Component } from '@angular/core';
import {MapDirectionsService} from '@angular/google-maps';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-getdistance',
  templateUrl: './getdistance.component.html',
  styleUrls: ['./getdistance.component.css']
})
export class GetdistanceComponent {
    
   // google-maps-demo.component.ts


  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  readonly directionsResults$: Observable<google.maps.DirectionsResult|undefined>;

  constructor(mapDirectionsService: MapDirectionsService) {
    const request: google.maps.DirectionsRequest = {
      destination: {lat: 12, lng: 4},
      origin: {lat: 14, lng: 8},
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));
  }
}




