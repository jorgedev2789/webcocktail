import { Component, OnInit, Input } from '@angular/core';
import { DrinksService } from '../services/drinks.service'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  drinkDetail = {
    strDrink: String,
    strDrinkThumb: String,
    strInstructions: String,
    strIngredient1: String,
    strIngredient2: String,
    strIngredient3: String
  }

  constructor(private drinks: DrinksService) {}

  ngOnInit(): void {
  
  }

  showDrink(id: number)
  {
    if(id > 0){
      this.drinks.getDrink(id).subscribe((res: any) => {
        this.drinkDetail = res.drinks[0]
      })
    }
  }

  closeDrink(){
    this.drinkDetail = {
      strDrink: String,
      strDrinkThumb: String,
      strInstructions: String,
      strIngredient1: String,
      strIngredient2: String,
      strIngredient3: String
    }
  }

}
