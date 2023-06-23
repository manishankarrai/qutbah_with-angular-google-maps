import { Component, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';

@Component({
  selector: 'app-geocoder',
  templateUrl: './geocoder.component.html',
  styleUrls: ['./geocoder.component.css']
})
export class GeocoderComponent implements OnInit {

  constructor(geocoder: MapGeocoder) {
    geocoder.geocode({
      address: 'noida , india'
    }).subscribe((results) => {
      console.log("vlaue ");
      console.log(results);
    });
  }

  ngOnInit(): void {
  }

}
