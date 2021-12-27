// import callApi from '../api'
import { Data } from '../components/data'
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

export const Products = () => {
    return (dispatch) => {
        dispatch(GetAllProduct(Data));
    }
}


    export function GetAllProduct(payload) {
        console.log(payload)
        return {
            type: 'GET_ALL_PRODUCT',
            payload
        }
    }


export function GetNumberCart() {
    return {
        type: 'GET_NUMBER_CART'
    }
}

export function AddCart(payload) {
    console.log(payload)
    return {
        type: 'ADD_CART',
        payload
    }
}

export function DeleteCart(payload) {
    console.log("delete" ,payload)
    return {
        type: 'DELETE_CART',
        payload
    }
}


export function model(payload) {
    console.log("payload",payload)
    return {
        type: 'MODEL',
        payload : payload
    }
}

export const addProductQuantity = (id) => {
    return {
        type: 'ADD_UPDATE_QUANTITY',
        id: id
    };
};

export const removeProductQuantity = (id) => {
    return {
        type: 'REMOVE_UPDATE_QUANTITY',
        id: id
    };
};




