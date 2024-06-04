export const addToLike = (shopObj) => ({
   type: 'ADD_TO_LIKE',
   payload: shopObj,
})

export const delFromLike = (id) => ({
   type: 'DELETE_FROM_LIKE',
   payload: id,
})
