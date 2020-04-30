import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';
const urlDrink = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

@Injectable({
  providedIn: 'root'
})

export class DrinksService {

  constructor(private http: HttpClient) { }

  // get all drinks by Filter
  getDrinks(term: string)
  {
    return this.http.get(`${url}${term}`);
  }

  // get detail drink by Id

  getDrink(id: number)
  {
    return this.http.get(`${urlDrink}${id}`);
  }

}
