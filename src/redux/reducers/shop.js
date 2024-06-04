const initialState = {
   items: [],
   isLoaded: false,
   name: '',
}

const shop = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_shop': {
         return {
            ...state,
            items: action.payload,
            isLoaded: true
         }
      }

      case 'SET_LOADED': {
         return {
            ...state,
            isLoaded: action.payload
         }
      }
      case 'SET_SEARCH_NAME': {
         return {
            ...state,
            name: action.payload
         }
      }

      default:
         return state
   }

}

export default shop