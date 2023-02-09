import { Component } from '@angular/core';
import { KitchensService } from '../services/kitchens.service';
import { Kitchen } from '../../models/Kitchen';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-price-modify',
  templateUrl: './price-modify.component.html',
  styleUrls: ['./price-modify.component.css']
})
export class PriceModifyComponent {
  kitchen: any;
  price: number=0;
  constructor(private kitchenService: KitchensService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.kitchen=this.kitchenService.getKitchens().find((kitchen: Kitchen) => kitchen.reference == this.route.snapshot.params['id']);
    this.price=this.kitchen.price;
  }

  modifyPrice() {
    if(confirm("¿Estás seguro de que quieres modificar el precio?"))
    this.kitchenService.setPrice(this.price??=0,this.kitchen.reference);
  }
  goToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
