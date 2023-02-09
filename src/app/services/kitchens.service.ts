import { Injectable } from '@angular/core';
import { Kitchen } from 'src/models/Kitchen';

@Injectable({
    providedIn: 'root',
})
export class KitchensService {
    private kitchens: Kitchen[] = [
        new Kitchen('../../assets/img/cocina1.jpg', 200, 'Cocina 1'),
        new Kitchen('../../assets/img/cocina2.jpg', 300, 'Cocina 2'),
        new Kitchen('../../assets/img/cocina3.jpg', 400, 'Cocina 3'),
        new Kitchen('../../assets/img/cocina4.jpg', 500, 'Cocina 4'),
    ];

    constructor() {}

    getKitchens() {
        return this.kitchens;
    }
    setPrice(price: number, index: number) {
        this.kitchens.find((kitchen) => kitchen.reference === index)?.setPrice(price);
    }
}
