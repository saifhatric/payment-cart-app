import React from 'react'
import { clearCart } from '../app/features/cart/CartSlise';
import { useDispatch } from 'react-redux';
import { closeModal } from "../app/features/modal/ModalSlice"
const Modal = () => {
    const dispatch = useDispatch();
    return (
        <section className="modal-container" >
            <div className="modal">
                <h4>Remove All Items From Your Shopping Cart ?</h4>
                <div className="btn-container">
                    <button type="button"
                        className='btn confirm-btn'
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal())
                        }}>
                        confirm
                    </button>
                    <button type="button"
                        className='btn clear-btn'
                        onClick={() => dispatch(closeModal())}>
                        cancel
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Modal;