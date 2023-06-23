import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { GeocoderComponent } from './geocoder/geocoder.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapInfoWindowComponent } from './map-info-window/map-info-window.component';
import { MapGroundOverlayComponent } from './map-ground-overlay/map-ground-overlay.component';
import { TestingComponent } from './testing/testing.component';
import { CurrentlocationComponent } from './currentlocation/currentlocation.component';
import { GetdistanceComponent } from './getdistance/getdistance.component';
import { UserqutbahComponent } from './userqutbah/userqutbah.component';




const routes: Routes = [
  {path:'xyz',component:GooglemapComponent},
  {path: 'geo' , component: GeocoderComponent} ,
  { path: 'mapmarker' , component: MapMarkerComponent} ,
  { path: 'mapinfowindow' , component: MapInfoWindowComponent} ,
  { path: 'mapgroundoverlay' , component:     MapGroundOverlayComponent} ,
  { path : 'test' , component: TestingComponent} ,
  { path: 'currentl' , component: CurrentlocationComponent} ,
  { path: 'getdistance' , component: GetdistanceComponent} ,
  { path: '' , component: UserqutbahComponent}
  // {path: 'map-marker', component: MapMarkerComponent},
  // {path: 'map-info-window', component: MapInfoWindowComponent},
  // {path: 'map-polyline', component: MapPolylineComponent},
  // {path: 'map-polygon', component: MapPolygonComponent},
  // {path: 'map-rectangle', component: MapRectangleComponent},
  // {path: 'map-circle', component: MapCircleComponent},
  // {path: 'map-ground-overlay', component: MapGroundOverlayComponent},
  // {path: 'map-kml-layer', component: MapKmlLayerComponent},
  // {path: 'map-traffic-layer', component: MapTrafficLayerComponent},
  // {path: 'map-transit-layer', component: MapTransitLayerComponent},
  // {path: 'map-bicycling-layer', component: MapBicyclingLayerComponent},
  // {path: 'map-directions-renderer', component: MapDirectionsRendererComponent},
  // {path: 'map-heatmap-layer', component: MapHeatmapLayerComponent},
  // {path: 'map-geocoder-service', component: GeocoderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
