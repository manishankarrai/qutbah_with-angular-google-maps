import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlllocationsService {
   alllocation:google.maps.LatLngLiteral[] = [];
   
   origin = '';
   destination = 'ff';
   apikey  = 'AIzaSyD2rWUKdIaSxRGX29XFcmjHqfkqPAkpwOQ' ;
   apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${this.origin}&destination=${this.destination}&key=${this.apikey}`;
   constructor(private http: HttpClient) {}
   api2 = `https://maps.googleapis.com/maps/api/directions/json?
   origin=delhi,MA&destination=noida`
  // Inject the HttpClient in your component or service
  
  getDirection(myobj: any , myobj2: any){
  const   origin = `${myobj.lat},${myobj.lng}`;
  const    destination = `${myobj2.lat},${myobj2.lng}`;
   const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

//  return this.http.get(this.api2 , { headers });
  //(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${this.apikey}`) ;
   return this.http.get(`https://maps.googleapis.com/maps/api/directions/json
   ?avoid=highways
   &destination=Montreal
   &mode=bicycling
   &origin=Toronto
   &key=${this.apikey}`)  
}
  // Function to calculate the driving distance and duration between two coordinates
}
