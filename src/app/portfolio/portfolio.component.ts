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
            this.kitchenService.setKitchens(Object.values(dataKitchens));
            this.kitchens = this.kitchenService.kitchens;
        });
    }
    goToProject(index: number) {
        this.router.navigate(['/project', index]);
    }
}
