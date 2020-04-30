import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../services/filters.service'; 
import { DrinksService } from '../services/drinks.service'; 

const params = {'c':'Cat','g':'Gla','i':'Ing','a':'Alc'} 

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  categoriesData  = [];
  glassesData     = [];
  ingredientsData = [];
  alcoholicData   = [];

  drinksData = []

  queryString = []

  constructor(private filters: FiltersService, private drinks: DrinksService) { }

  ngOnInit(): void {

    this.filters.getFilters(0).subscribe( (res: any) => this.categoriesData = res.drinks );
    this.filters.getFilters(1).subscribe( (res: any) => this.glassesData = res.drinks );
    this.filters.getFilters(2).subscribe( (res: any) => this.ingredientsData = res.drinks );
    this.filters.getFilters(3).subscribe( (res: any) => this.alcoholicData = res.drinks );

  }

  searchDrinks(el:any)
  {
    let term = this.queryString

    for(let k in params) {
      if(el.name === `cb${params[k]}` && el.value !== ''){
        term[k] = el.value
      }
      if(el.name === `cb${params[k]}` && el.value === ''){
        delete term[k]
      }
    }

    this.queryString = term;

    let urlParameters = Object.entries(this.queryString).map(e => e.join('=')).join('&');
    
    this.drinks.getDrinks(urlParameters).subscribe((res: any) => this.drinksData = res.drinks)
  }

}
