import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlFilters  = [
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list',
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'
];

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http: HttpClient) { }

  getFilters(pos: number)
  {
    return this.http.get(urlFilters[pos]);
  }

}
