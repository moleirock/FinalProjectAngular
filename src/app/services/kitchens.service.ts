import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Kitchen } from 'src/models/Kitchen.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class KitchensService {
    public kitchens: Kitchen[] = [];

    constructor(private httpClient:HttpClient) {}


    getKitchens():Observable<Kitchen> {
        return this.httpClient.get<Kitchen>('https://finalprojectangular-22bd0-default-rtdb.firebaseio.com/kitchens.json');
    }

    setKitchens(kitchens: Kitchen[]) {
        this.kitchens = kitchens;
    }

    setPrice(price: number, index: number) {
        this.httpClient.put('https://finalprojectangular-22bd0-default-rtdb.firebaseio.com/kitchens/'+index+'/price.json',price).subscribe();
    }

   
}
