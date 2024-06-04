import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card/Card'
import NamePage from '../components/NamePage'

function Liked({ items, onAddBuy, onAddLike, onDelBuy, onDelLike }) {
   const liked = useSelector(state => state.like.liked)

   return (
      <div>
         <NamePage>My saves</NamePage>
         {liked.length > 0
            ? <div className="shop justify-content-center">
               {items.map(obj => (liked.includes(obj.id) &&
                  <Card
                     key={obj.id}
                     id={obj.id}
                     name={obj.name}
                     imageUrl={obj.imageUrl}
                     price={obj.price}
                     onAddLike={onAddLike}
                     onAddBuy={onAddBuy}
                     onDelBuy={onDelBuy}
                     onDelLike={onDelLike}
                  />
               ))
               }
            </div>
            : <div className="shop-empty">
               <p className="shop-empty__emoji">😳</p>
               <h2>There are no savings :(</h2>
               <p className="shop-empty__text">You haven't added anything to saved</p>
               <NavLink to='/'>
                  <button className="button-back">
                     <span>Go back</span>
                     <img src="img/arrow.svg" alt="" />
                  </button>
               </NavLink>
            </div>
         }
      </div>
   )
}

export default Liked