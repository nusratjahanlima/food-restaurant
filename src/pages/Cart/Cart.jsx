/* eslint-disable react/jsx-key */
import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import {useNavigate } from 'react-router-dom';

const Cart = () => {

    const {getTotalCartAmount,food_list,cartItems,removeFromCart} = useContext(StoreContext);
    
    const navigate = useNavigate();
    
    
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {food_list.map((e) => {
                if(cartItems[e.id]>0)
                {
                    return  <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <p className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}}>x</p>
                        
                    </div>
                    <hr />
                </div>

                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
            
                        </div>
                        <hr />

                        <div className="cartitems-total-item">
                            <p>Shopping Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</h3>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
           
        </div>
    );


};

export default Cart;







