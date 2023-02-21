import { Injectable } from '@angular/core';
import { Kitchen } from 'src/models/Kitchen.model';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root',
})
export class KitchensService {
    public kitchens: Kitchen[] = [];

    constructor(private dataService: DataService) {}

    //crear un metodo que busque en la base de datos y devuvelva un array de kitchens creadas con los datos de la base de datos
    getKitchens() {
        return this.dataService.getKitchens();
    }

    setKitchens(kitchens: Kitchen[]) {
        this.kitchens = [];
        for (let i = 0; i < kitchens.length; i++) {
            this.kitchens.push(
                new Kitchen(
                    i,
                    kitchens[i].photo,
                    kitchens[i].price,
                    kitchens[i].description
                )
            );
        }
    }

    setPrice(price: number, index: number) {
        this.dataService.updateKitchen(index, price);
    }

    /* private kitchens: Kitchen[] = [
        new Kitchen(
            '../../assets/img/cocina1.jpg',
            200,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ac mauris id auctor. Curabitur a leo imperdiet, iaculis orci id, euismod felis. Suspendisse elementum molestie risus efficitur tempus. Proin laoreet diam quis nunc sollicitudin, in ullamcorper justo placerat. Nam id porta metus. Morbi fermentum, justo sed volutpat scelerisque, magna felis gravida arcu, a egestas velit felis at tellus. Curabitur ut sem a enim vestibulum pellentesque. Sed placerat nisi vel pellentesque ornare. In consequat aliquet est a feugiat. Curabitur gravida accumsan tortor non lobortis. Integer nec risus lacinia, pharetra nulla in, ornare lacus.'
        ),
        new Kitchen(
            '../../assets/img/cocina2.jpg',
            300,
            'Nunc vel faucibus orci, in aliquam neque. Ut mattis magna nec erat iaculis rhoncus. Nulla tortor libero, pretium eu mollis a, viverra eget massa. Nulla lectus eros, tincidunt vitae varius sit amet, sollicitudin ac nibh. Maecenas id fermentum justo, ut sodales nunc. Aliquam feugiat mi sit amet ligula pretium, tristique ornare nunc tincidunt. Ut eros lorem, commodo vitae nibh eu, facilisis tristique eros. Pellentesque iaculis tristique molestie. Praesent aliquet euismod enim sed finibus. Sed porttitor, lectus vitae faucibus rutrum, lorem felis pulvinar tortor, lacinia sodales sapien justo at purus. Sed pharetra in enim sed fringilla. Nam tempus semper nulla nec porttitor. In imperdiet lectus vitae ex malesuada tempus. Donec interdum venenatis tempor. Donec sed orci quis magna viverra molestie.'
        ),
        new Kitchen(
            '../../assets/img/cocina3.jpg',
            400,
            'Donec sed nisl leo. Praesent congue, arcu vel lobortis accumsan, libero est aliquet libero, id porta diam tellus vitae nisi. Fusce sollicitudin felis id consequat hendrerit. In ultricies nibh sit amet feugiat vulputate. Aenean et aliquet purus. Maecenas consequat libero varius nisi consectetur finibus sit amet id nulla. Curabitur maximus ligula ac magna tempus, at porta velit ultrices. Praesent volutpat cursus nisi a porttitor. Aliquam ac nulla euismod mauris vulputate malesuada.'
        ),
        new Kitchen(
            '../../assets/img/cocina4.jpg',
            500,
            'Nulla tincidunt ipsum sed luctus eleifend. Quisque interdum dictum tempus. Proin porta sapien ac lorem pellentesque ultricies. Proin tincidunt feugiat mauris in rhoncus. Phasellus at mi ut elit gravida accumsan a eget magna. Sed pharetra libero mollis turpis finibus, egestas efficitur metus sodales. Mauris a velit sit amet erat condimentum imperdiet. Vestibulum vestibulum fermentum nisi, in luctus eros ultricies dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mollis, ligula sed interdum condimentum, metus nisi vehicula risus, id pharetra quam lacus a ante. In viverra velit ac libero porta pharetra pulvinar placerat purus. In hac habitasse platea dictumst.'
        ),
    ]; */
}
