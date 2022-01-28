import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  items: any;
  aux_id:any;
  horario:any;
  today: any = Date.now();
  dia: any= new Date().getDay();
  clickbutton(id:any) {
    this.restaurantService.get("https://api-test-oasis.herokuapp.com/api/getSchedule/"+id).subscribe((res: any)=> {
      this.horario= res;
      console.log(this.horario);
    });
    this.aux_id=id;
  }
  constructor(
    public restaurantService: RestaurantService
    ) {
      this.restaurantService.get("https://api-test-oasis.herokuapp.com/api/getData").subscribe((res: any)=> {
        this.items= res;
/*         console.log(this.items);
        console.log(this.dia); */
        
      });
    }
    ngOnInit(): void {
    
    
  }

}
