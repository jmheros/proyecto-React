import React from "react";
import './cart-modal.css';
import air from '../img/Air jordan 1.png';
import trash from '../img/icon-delete.svg';

const CartModal = () =>{
    <div className="cart-modal" style={display= "none"}>
        <p class="cart-modal__title">Shop Bag</p>
            <div class="cart-modal__checkout-container">
                <div class="cart-modal__details-container">
                    <img class="cart-modal__image" src= {air} alt=""> </img>
                    <div>
                        <p class="cart-modal__product">Air Jordan 1 Hi FlyEase</p>
                        <p class="cart-modal__price">$57.000 x3 <span>$171.000</span></p>

                    </div>
                    <img class="cart-modal__delete" src= {trash} alt=""></img>
                </div>
                <button class="cart-modal__Checkout">Checkout</button>
            </div>
        </div>
   
}

export default CartModal;