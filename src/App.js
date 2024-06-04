import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './scss/App.scss';

import Header from './components/Header';
import Buy from './pages/Buy';
import Home from './pages/Home';
import Liked from './pages/Liked';

import { addToCart, delFromCart } from './redux/actions/cart';
import { addToLike, delFromLike } from './redux/actions/like';


function App() {
   const dispatch = useDispatch()
   const items = useSelector((state) => state.shop.items)
   const onAddBuy = (shopObj) => {
      dispatch(addToCart(shopObj))
   }

   const onAddLike = (shopObj) => {
      dispatch(addToLike(shopObj))
   }

   const onDelBuy = (shopObj) => {
      dispatch(delFromCart(shopObj))
   }

   const onDelLike = (id) => {
      dispatch(delFromLike(id))
   }

   return (
      <div className="wrapper">
         <Header items={items} onDelBuy={onDelBuy} />
         <div className="content">
            <Routes>
               <Route path='/cart' element={<Buy />} />
               <Route path='/saved' element={<Liked
                  items={items} onAddBuy={onAddBuy} onAddLike={onAddLike}
                  onDelBuy={onDelBuy} onDelLike={onDelLike}
               />} />
               <Route path='/' element={<Home
                  items={items} onAddBuy={onAddBuy} onAddLike={onAddLike}
                  onDelBuy={onDelBuy} onDelLike={onDelLike}
               />} />
            </Routes>
         </div>
      </div>
   )
}

export default App;
