import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  algo: any;
  today: number = Date.now();
  constructor(
    public restaurantService: RestaurantService
  ) {
    this.restaurantService.get("https://api-test-oasis.herokuapp.com/api/getData").subscribe((res: any)=> {
        this.algo= res;
        console.log(res);
      });
   }
   ngOnInit(): void {
    
   
  }

}
