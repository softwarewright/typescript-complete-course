import _ from 'lodash';
import Product from './product';
import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import {validate} from 'class-validator';

/**
 * Use this as a last resort
*/
declare var GLOBAL:string;

console.log(_.shuffle([1,2,3]));


const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 },
]

// const loadedProducts = products.map(p=>new Product(p.title, p.price));
const loadedProducts = plainToClass(Product, products);

const p1 = new Product('A Book', 15.99);

console.log(p1);
console.log(loadedProducts)

const newProduct = new Product('', -5.99);

validate(newProduct).then(console.log);