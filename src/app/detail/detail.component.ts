import { Component, OnInit, Input } from '@angular/core';
import { DrinksService } from '../services/drinks.service'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  drinkDetail = {
    idDrink: ''
  };

  constructor(private drinks: DrinksService) { }

  ngOnInit(): void {
    
  }

  showDrink(id: number)
  {
    if(id > 0){
      this.drinks.getDrink(id).subscribe((res: any) => {
        ({idDrink : this.drinkDetail.idDrink } = res.drinks)

        console.log(res)
      })
    }
  }

}
