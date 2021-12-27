import React, { Component } from 'react'
import { connect } from "react-redux";
import { DeleteCart, addProductQuantity,removeProductQuantity } from '../actions/index';
// import '../App.css';
import { useSelector, useDispatch } from 'react-redux'

function Cart(props) {

    const cartList = useSelector(state => state._todoProduct?.cart)
    console.log(cartList)
    const dispatch = useDispatch()

    // const add = () => {
    //     alert("Oder is Successfully!");
    // }
    // console.log(items)



    return (
        <div className="row">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Categories</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map((item, key) => {
                                console.log(item)
                                return (
                                    <tr key={key}>
                                        <td><i className="btn btn-primary" onClick={() => dispatch(DeleteCart(key))}>X</i></td> 
                                        <td>{item.productName}</td>
                                        <td><img src={item.image} style={{ width: '100px', height: '100px' }} /></td>
                                        <p class="card-title">{item.categories}</p>
                                        <td>{item.price} </td>

                                        <td>
                                            <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => dispatch(removeProductQuantity(key))}>-</span>
                                            <span className="btn btn-info">{item.count}</span>
                                            <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => dispatch(addProductQuantity(key))}>+</span>
                                        </td>

                                        <td class="card-title">{item.description}</td>

                                     
                                    </tr>
                                )
                            })

                        }
                        <tr>
                            <td colSpan="5">Total Carts</td>
                         

                        </tr>
                    </tbody>
                </table>





                <div className="row justify-content-end container-proceed-cart">
                    <div className="col-lg-3 col-md-5 col-sm-6 col-xs-8">
                        <div className="btn-group" role="group" aria-label="Checkout">
                            <button type="button" className="btn btn-primary">submit</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state.cart,
        numberCart: state._todoProduct.numberCart
    }

}

export default connect(mapStateToProps, { DeleteCart, })(Cart)
