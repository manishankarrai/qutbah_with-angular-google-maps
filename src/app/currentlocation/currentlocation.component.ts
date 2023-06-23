import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-currentlocation',
  templateUrl: './currentlocation.component.html',
  styleUrls: ['./currentlocation.component.css']
})
export class CurrentlocationComponent {
  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};
  zoom = 4;
  locationBool = false ;
  markerPositions: google.maps.LatLngLiteral = this.center;
  constructor() {

  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude.toFixed(15);
          const longitude = position.coords.longitude.toFixed(15); 

          // Update the map center to the current location
        //  this.mapOptions.center = { lat: latitude, lng: longitude };
          console.log(latitude , longitude);
          this.center.lat = +latitude ;
          this.center.lng = +longitude ;
          this.zoom = 13 ;
         // this.map.setCenter(this.mapOptions.center);
         setTimeout(()=>{
          console.log("work phase 1");
          this.locationBool=true ;
          console.log("work phase 2");

         } ,1000);
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

}
