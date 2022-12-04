import { IProduct } from "../interface/product.interface";

export class Product{
    products: IProduct[];
    constructor() {
        this.products = [];
    }
}