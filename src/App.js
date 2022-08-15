import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import {useSelector, useDispatch} from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';



const App = () => {
  
  const {isModalOpen} = useSelector((state) => state.modal)
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);


  return (
    <main>
      <Navbar/>
      { isModalOpen && <Modal/>}
      <CartContainer/>
    </main>
  )
}

export default App
