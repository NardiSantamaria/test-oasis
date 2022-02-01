import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  hotels: any;

  constructor(
    public restaurantService: RestaurantService) {
      this.restaurantService.get("http://127.0.0.1:8000/api/getData").subscribe((res: any)=> {
        this.hotels= res.hoteles;
        console.log('items de hoteles'+this.hotels);
      });
    }

  ngOnInit(): void {
  }


}
