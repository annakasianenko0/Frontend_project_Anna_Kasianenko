import axios from "axios"
// axios.defaults.baseURL = "http://localhost:3001"

export const fetchshop = () => (dispatch) => {
   dispatch(setLoaded(false))
   axios.get(`https://665e34981e9017dc16ef5589.mockapi.io/sport-items`).then((resp) => {   //http://localhost:3001
      console.log(resp)
      dispatch(setshop(resp.data))
   })
}

export const setshop = (items) => ({
   type: 'SET_shop',
   payload: items,
})

export const setLoaded = (isLoaded) => ({
   type: 'SET_LOADED',
   payload: isLoaded
})

export const setSearchName = (name) => ({
   type: 'SET_SEARCH_NAME',
   payload: name
})