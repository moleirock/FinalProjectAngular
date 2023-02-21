import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KitchensService } from '../services/kitchens.service';
import { Location } from '@angular/common';
import { Kitchen } from '../../models/Kitchen.model';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
    kitchens: any = [];
    kitchen: Kitchen = new Kitchen(10, 'Cocina 1',200,"Description");
    index: number = 0;
    constructor(
        private kitchenService: KitchensService,
        private router: Router,
        private ruta: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
        this.index = this.ruta.snapshot.params['id'];
        this.kitchenService.getKitchens().subscribe((dataKitchens: any) => {  
            this.kitchenService.setKitchens(Object.values(dataKitchens));
            this.kitchens = this.kitchenService.kitchens;
            this.kitchen = this.kitchens.find(
                (kitchen: Kitchen) => kitchen.reference == this.index
            );
        });
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
    goToModify() {
        this.router.navigate(['/price-modify', this.index]);
    }
    goBack() {
        this.location.back();
    }
}
