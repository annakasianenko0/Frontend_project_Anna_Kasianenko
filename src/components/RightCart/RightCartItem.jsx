import React from 'react'

function RightCartItem({ id, name, imageUrl, price, onDelBuy }) {
   const onDelFromCart = () => {
      const obj = { id, name, price, imageUrl }
      onDelBuy(obj)
   }

   return (
      <div className='right-cart-item'>
         <img width={70} height={70} src={imageUrl} alt="" />
         <div className="right-cart-item__info">
            <div className="right-cart-item__name">
               <p>{name}</p>
            </div>
            <div className="right-cart-item__price">
               <p>{price} UAR</p>
            </div>
         </div>
         <button
            className='button-card button-card__delete button-card__active'
            onClick={onDelFromCart}
         >
            <img src="img/delete.svg" alt="" />
         </button>
      </div>
   )
}

export default RightCartItem