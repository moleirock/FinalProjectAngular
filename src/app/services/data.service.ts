import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getKitchens(){
    return this.httpClient.get('https://finalprojectangular-22bd0-default-rtdb.firebaseio.com/kitchens.json');
  }

  updateKitchen(index:number,price:number){
    this.httpClient.put('https://finalprojectangular-22bd0-default-rtdb.firebaseio.com/kitchens/'+index+'/price.json',price).subscribe();
  }
}
