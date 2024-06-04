import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CardWithoutButtons from '../components/Card/CardWithoutButtons'
import NamePage from '../components/NamePage'

function Buy() {
   const bought = useSelector(state => state.cart.bought)

   return (
      <div>
         <NamePage>My purchases</NamePage>
         {bought.length > 0
            ? <div className="shop justify-content-center">
               {bought.map(obj => (
                  <CardWithoutButtons name={obj.name} imageUrl={obj.imageUrl} price={obj.price} />
               ))
               }
            </div>
            : <div className="shop-empty">
               <p className="shop-empty__emoji">😔</p>
               <h2>You have no purchases</h2>
               <p className="shop-empty__text">Make at least one order.</p>
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

export default Buy