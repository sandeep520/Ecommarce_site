import { combineReducers } from 'redux';
import { GET_ALL_PRODUCT, GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../actions';
import Product from '../components/Product';

import { updateObject, updateLocalStorage, getLocalStorage } from '../Utility/utility';



const initialState = {
    numberCart: 0,
    cart: [],
    _products: [],
    array: [],
    price: 0
}


const modal = (state, action) => {
    let temp = { ...state };

    action.payload = { ...action.payload, isCart: false }
    let tempArray = [...temp.array, action.payload];
    temp.array = tempArray;
    console.log('temp', temp)
    return temp;
}

const remove = (state, action) => {
    console.log(action.payload)
    let temp = { ...state }
    let tempForm = [...temp.cart]
    const removeCart = tempForm.filter((todo, index) => {
        console.log(index)
        return index !== action.payload
    })
    console.log(tempForm)
    console.log(temp)
    console.log(removeCart)
    temp.cart = removeCart
    return temp
}



const addProductQuantity = (state, action) => {

    let temp = { ...state };
    console.log(temp)
    let tempCart = [...temp.cart];
    console.log(tempCart)

    // tempcart mathi findindex karse puchi index and actionid bane ni id match and datatype match karse

    let tempIndex = tempCart.findIndex((data, index) => (index === action.id));
    console.log(action.id)

    // increment data
    tempCart[tempIndex].count = tempCart[tempIndex].count + 1;
    console.log(tempCart[tempIndex])
    // temp.price = temp.price + tempCart[tempIndex].price;
    // console.log(price)
    temp.cart = tempCart;
    return temp;
}

const removeProductQuantity = (state, action) => {
    let temp = { ...state };

    let tempCart = [...state.cart];
    let tempProductList = [...temp._products];
    let tempIndex = tempCart.findIndex((data, i) => (i === action.id));
    temp.price = temp.price - tempCart[tempIndex].price;
    switch (true) {
        case tempCart[tempIndex].count > 1:
            tempCart[tempIndex].count = tempCart[tempIndex].count - 1
            break;
        case tempCart[tempIndex].count <= 1:
            tempCart = tempCart.filter((data, i) => i !== action.id);
            tempProductList = tempProductList.map((data, i) => ((i === action.id) && (data.isCart = !data.isCart)))
            break;
        default: return
    }
    temp.cart = tempCart;
    temp._products = tempProductList;
    console.log(">>>>>>>>>>>>>>>>>>>>temp<<<<<<<<", temp)
    return { ...temp };
}




function todoProduct(state = initialState, action) {
    console.log(action)
    switch (action.type) {

        case ADD_CART:
            console.log(state)
            let temp = { ...state };
            let tempProductList = [...temp.array];
            let tempCart = [...temp.cart];

            let tempIndex = tempProductList.findIndex((data, i) => (i === action.payload))
            tempProductList[tempIndex].isCart = !tempProductList[tempIndex].isCart;
            tempProductList[tempIndex]["count"] = 1;
            tempCart.push(tempProductList[tempIndex]);
            temp.price = temp.price + tempProductList[tempIndex].price;
            return {
                ...state,
                array: tempProductList,
                cart: tempCart
            }

        // quantity increase for product

        case 'ADD_UPDATE_QUANTITY':
            return addProductQuantity(state, action);

        case 'REMOVE_UPDATE_QUANTITY':
            return removeProductQuantity(state, action);

        // case 'UPDATE_PRODUCTS_LIST':
        //     return updateProductsList(state, action);

        case 'DELETE_CART':
            console.log(action)
            // return state
            return remove(state, action)


        case 'MODEL':
            return modal(state, action);

        default:
            return state;
    }
}
const ShopApp = combineReducers({
    _todoProduct: todoProduct,

});
export default ShopApp;