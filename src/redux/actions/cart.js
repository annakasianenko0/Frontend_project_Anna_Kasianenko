export const openCart = (isOpen) => ({
   type: 'IS_CART',
   payload: isOpen,
})

export const addToCart = (shopObj) => ({
   type: 'ADD_TO_CART',
   payload: shopObj,
})

export const delFromCart = (shopObj) => ({
   type: 'DELETE_FROM_CART',
   payload: shopObj,
})

export const buy = () => ({
   type: 'BUY',
})

// export const clearCart = () => ({   поки не реалізовано
//    type: 'CLEAR_CART',
// })
