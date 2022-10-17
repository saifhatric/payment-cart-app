import { React, useEffect } from 'react';
import Nav from './components/Nav';
import Modal from './components/Modal';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calcTotal, getCartItems } from './app/features/cart/CartSlise';
import './App.css';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calcTotal())
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems())
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="App">
      {
        isOpen && <Modal />
      }

      <Nav />
      <CartContainer />
    </div>
  );
}

export default App;
