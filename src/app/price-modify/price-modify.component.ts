import { Component } from '@angular/core';
import { KitchensService } from '../services/kitchens.service';
import { Kitchen } from '../../models/Kitchen.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-price-modify',
    templateUrl: './price-modify.component.html',
    styleUrls: ['./price-modify.component.css'],
})
export class PriceModifyComponent {
    kitchen: any;
    kitchens: any = [];
    price: number = 0;
    constructor(
        private kitchenService: KitchensService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.kitchenService.getKitchens().subscribe((dataKitchens: any) => {
            this.kitchens = [];
            dataKitchens.forEach((kitchen: any) => {
                this.kitchens.push(
                    new Kitchen(
                        kitchen.key,
                        kitchen.photo,
                        kitchen.price,
                        kitchen.description
                    )
                );
            });
        });
        this.kitchen = this.kitchens.find(
            (kitchen: Kitchen) =>
                kitchen.reference == this.route.snapshot.params['id']
        );
        this.price = this.kitchen.price;
    }

    modifyPrice() {
        if (confirm('¿Estás seguro de que quieres modificar el precio?'))
            this.kitchenService.setPrice(
                (this.price ??= 0),
                this.kitchen.reference
            );
    }
    goToPortfolio() {
        this.router.navigate(['/portfolio']);
    }
}
