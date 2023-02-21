import { KitchensService } from './../services/kitchens.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Kitchen } from '../../models/Kitchen.model';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
    kitchens: any = [];
    constructor(
        private kitchenService: KitchensService,
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
    }
    goToProject(index: number) {
        this.router.navigate(['/project', index]);
    }
}
