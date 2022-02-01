import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';


@Component({
  selector: 'app-select-hotel',
  templateUrl: './select-hotel.component.html',
  styleUrls: ['./select-hotel.component.css']
})
export class SelectHotelComponent implements OnInit {
  @Input()
  callback!: ((args: any) => void);
  hotels: any;
  selecthotel(e:any){
    // e.target.value 
    //callback code here
    this.callback(e.target.value );
  }
  constructor(
    public restaurantService: RestaurantService) {
      this.restaurantService.get("https://api-test-oasis.herokuapp.com/api/getData").subscribe((res: any)=> {
        this.hotels= res;
        console.log(this.hotels);
      });
      
    }
  ngOnInit(): void {
  }

}
