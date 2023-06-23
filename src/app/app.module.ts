import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule, MapMarker } from '@angular/google-maps'
import { GooglemapComponent } from './googlemap/googlemap.component';
import { GeocoderComponent } from './geocoder/geocoder.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapInfoWindowComponent } from './map-info-window/map-info-window.component';
import { MapGroundOverlayComponent } from './map-ground-overlay/map-ground-overlay.component';
import { TestingComponent } from './testing/testing.component';
import { CurrentlocationComponent } from './currentlocation/currentlocation.component';
import { GetdistanceComponent } from './getdistance/getdistance.component';
import { HttpClientModule } from '@angular/common/http';
import { UserqutbahComponent } from './userqutbah/userqutbah.component';



@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent ,
    GeocoderComponent ,
    MapMarkerComponent ,
    MapInfoWindowComponent ,
    MapGroundOverlayComponent,
    TestingComponent,
    CurrentlocationComponent,
    GetdistanceComponent,
    UserqutbahComponent,
    // MapMarkerComponent, 
    // MapInfoWindowComponent,
    // MapPolylineComponent,
    // MapPolygonComponent,
    // MapRectangleComponent,
    // MapCircleComponent,
    // MapGroundOverlayComponent,
    // MapKmlLayerComponent,
    // MapTrafficLayerComponent,
    // MapTransitLayerComponent,
    // MapBicyclingLayerComponent,
    // MapDirectionsRendererComponent,
    // MapHeatmapLayerComponent,
    // GeocoderComponent 
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule ,
    GoogleMapsModule,
    HttpClientModule
         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
