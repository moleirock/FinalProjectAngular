export class Kitchen {
    private static id = 0;
    public reference: number;

    constructor(public photo: string, public price: number, public description: string) {
        this.reference = Kitchen.id;
        Kitchen.id++;
    }
    setPrice(price: number) {
            this.price = price;
    }
}
