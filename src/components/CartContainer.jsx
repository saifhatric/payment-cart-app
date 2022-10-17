import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from "../app/features/modal/ModalSlice";
const CartContainer = () => {
    const { cartItems, amount, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <>
            {amount > 0 ?
                <section className='cart'>
                    <header>
                        <h2>Your Cart</h2>
                        <hr className="intro" />
                    </header>
                    {
                        Array.from(cartItems).map((item) => {
                            return (

                                <CartItem id={item.id} {...item} />
                            )
                        })
                    }
                    <footer>
                        <hr />
                        <div className="cart-total">
                            <h4>
                                Total: ${total.toFixed(2)}
                            </h4>
                        </div>
                        <button className="btn clear-btn"
                            onClick={() => {
                                dispatch(openModal())

                            }}
                        >Clear Cart
                        </button>
                    </footer>
                </section>

                :
                // if the bag is empty
                <section className='cart'>
                    <header>
                        <h2>Your Cart</h2>
                        <hr className="intro"></hr>
                        <p className='empty-cart'>Your Cart is Currently Empty</p>
                    </header>
                </section>
            }

        </>
    )
}

export default CartContainer;