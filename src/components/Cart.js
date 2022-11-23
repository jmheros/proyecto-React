import React from "react";
import imagen2 from '../img/bag-icon.png'
import imagen3 from '../img/image-avatar.png'

const Cart = () =>{
    return (
        <div className="header__cart-avatar">
                <div className="header__cart">
                    <div className="header__cart--notification">1</div>
                    <img className="bag-icon" src={imagen2} alt="" />
                </div>
                <img className="header__avatar" src={imagen3} alt="" />

            </div>
    )
}

export default Cart;