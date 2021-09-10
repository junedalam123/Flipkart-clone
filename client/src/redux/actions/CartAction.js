import * as actionTypes from "../constants/CartConstants";
import axios from 'axios'

const url = "http://localhost:5000";

export const addToCart = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: data })
    } catch (error) {
        console.log("Error while calling add to cart api" + error)
    }

}

export const removeFromCart = (id) =>  (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id })
}