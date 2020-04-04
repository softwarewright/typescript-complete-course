import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export default class Product {
    @IsNotEmpty({
        message: "Ensure that your title is not empty"
    })
    title: string;

    @IsNumber()
    @IsPositive()
    price:number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    getInformation() {
        return [this.title, this.price];
    }
}