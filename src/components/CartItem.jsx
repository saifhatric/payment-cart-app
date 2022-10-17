import React from 'react'
import { ChevronUp, ChevronDown } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem, increace, decreace } from '../app/features/cart/CartSlise';
const CartItem = ({ img, title, price, amount, id }) => {
    const dispatch = useDispatch();
    return (
        <>
            <section className='cart-item' key={id}>
                <img src={img} alt={title} />
                <div>
                    <h4>{title}</h4>
                    <h4 className='item-price'>${price}</h4>
                    <button className="remove-btn"
                        onClick={() => dispatch(removeItem(id))} >
                        Remove
                    </button>
                </div>
                <div>
                    <button className="amount-btn"
                        onClick={() => dispatch(increace({ id }))}>
                        <ChevronUp />
                    </button>
                    <p className="amount">{amount}</p>
                    <button className="amount-btn"
                        onClick={() => {
                            if (amount === 1) {
                                dispatch(removeItem(id));
                                return;
                            }
                            dispatch(decreace({ id }))
                        }}
                    >
                        <ChevronDown />
                    </button>
                </div>
            </section>
        </>
    )
}

export default CartItem;