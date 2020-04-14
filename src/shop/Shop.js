import React, { Component } from "react";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";
import { CartSummary } from "./CartSummary";

export class Shop extends Component {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="d-flex justify-content-between col bg-dark text-white align-items-center">
                    <div className="navbar-brand">SPORTS STORE</div>
                    <CartSummary  { ...this.props } />
                    <div>
                        <a className="mr-3 border border-primary rounded p-2 bg-primary text-white" href="https://google.com">Login</a>
                        <a className="mr-3 border border-primary rounded p-2 bg-primary text-white" href="https://google.com">Register</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products" categories={this.props.categories} />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={this.props.products} addToCart = {this.props.addToCart} />
                </div>
            </div>
        </div>
    }
}