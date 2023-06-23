import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { AlllocationsService } from '../services/alllocations.service';

interface Location {
  lat: number;
  lng: number;
  name: string;

}

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
//  currentLocation: Location = {} as Location;
  name: any ;
  locationBool = false ;
  // icons: string = '';
  // imageUrl = 'assets/image/logo.png';
  // imageBounds: google.maps.LatLngBoundsLiteral = {
  //   east: 2,
  //   north: 10,
  //   south: -10,
  //   west: -10,
  // };
  
 
  constructor(){
    console.log("test component loaded")
  }
  ngOnInit(): void {
    this.getCurrentLocation();
  }

  center: google.maps.LatLngLiteral =    {lat: 28.635903, lng: 77.360329};

  //{lat: this.currentLocation.lat , lng: this.currentLocation.lng}
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPositions.push(event.latLng.toJSON());
  }
 
      locations: Location[] = [
      { lat: 28.64027217214361, lng: 77.36118730688477, name: 'Bhisma college' } ,
      { lat: 28.6418540689171, lng: 77.35925611639405, name: 'Rajan Insitute' },
      { lat: 28.63847205656025, lng: 77.36074447631836, name: 'Kgn Infotech Branch' },
      { lat: 28.5867146673802 , lng: 77.3306659056806 , name: 'kishan'},
      { lat: 28.638554653532903 , lng: 77.56961854239935 , name: 'pinkman'} ,
      { lat:  28.656632348193096, lng: 77.28534730216498 , name: 'Hit man'} ,
      { lat:  28.653017058547647, lng:  77.17960389396185, name: 'gold gold'}

      // Add more locations as needed
    ];
    openInfoWindow(marker: MapMarker , locationName: any) {
      this.name = locationName ;
      if(this.infoWindow != undefined)
     
      this.infoWindow.open(marker );
    }
  
    //get current location when it started
    
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
          this.zoom = 14 ;
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
//get route 


// Test data


// Calculate the driving distance and duration between the two coordinates




}
