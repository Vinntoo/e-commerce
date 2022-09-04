import React, {Component} from 'react';
import Product from './Product';

export default class ShoppingCart extends Component {
    state={products:[
        {
        id:1,
        productName:'iPhone',
        price:40000,
        quanity:20},
        {
        id:2,
        productName:'Sony Camera',
        price:40000,
        quanity:5},
        {
        id:3,
        productName:'Car',
        price:4000000,
        quanity:10},
        {
        id:4,
        productName:'PC',
        price:400,
        quanity:30},
        {
        id:5,
        productName:'Umbrella',
        price:300,
        quanity:4},
    
        {
        id:6,
        productName:'Laptop',
        price:1000000,
        quanity:50},
    
    ],};
    render(){
        return (

        <div>
            <h4>Shopping Cart</h4>
            <div>
                {this.state.products.map((prod) => {
                    return <Product key={prod.id} id={prod.id}/>;
                })}
            </div>
        </div>
        );
       
    }
}