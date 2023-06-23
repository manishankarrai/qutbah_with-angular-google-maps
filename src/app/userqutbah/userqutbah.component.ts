import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userqutbah',
  templateUrl: './userqutbah.component.html',
  styleUrls: ['./userqutbah.component.css']
})
export class UserqutbahComponent {
 
  mydata  =  [1,2,3,4,5,6,1,2,3,4,5,6 ,1,2,3,4,5,6 ,1,2,3,4,5,6]

  constructor(private router: Router){

  }
  searchmosque() {

  }
  checklocation(){
    this.router.navigateByUrl('/currentl');
  }
}
