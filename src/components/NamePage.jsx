import React from 'react'
import { NavLink } from 'react-router-dom'

function NamePage({ children }) {
   return (
      <div className='page-name'>
         <NavLink to="/">
            <button className='button-card button-card__active'>
               <img src="img/arrowMini.svg" alt="" />
            </button>
         </NavLink>
         <h1>{children}</h1>
      </div>
   )
}

export default NamePage