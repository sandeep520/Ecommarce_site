

// // import React, { useEffect, useState } from 'react'
// import React, { Component } from 'react'
// import { Products, AddCart } from '../actions'
// import { connect } from 'react-redux';

// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import '../App.css';


// export class Home extends Component {
//     constructor(props) {
//         super(props)

//     }
    
//     componentDidMount() {
//         this.props.ProductsRequest();
//     }

//     render() {
//         return (
//             <>

//                 <div style={{ marginBottom: '100px' }}>
//                     <h1 style={{ textAlign: 'center', fontFamily: 'Times, serif' }}>All Product</h1>
//                     <div>

//                         <h1 style={{ textAlign: 'center', fontFamily: 'Times, serif' }}>All Products that available to order</h1>
//                     </div>


//                 </div>
//                 <div className="ui grid container" >

//                     <div className="ui placeholder segment">
//                         <div className="ui two column stackable center aligned grid">
//                             <div className="middle aligned row">
//                                 <div className="column lp">
//                                     <img style={{ width: '273px' }} className="ui fluid image" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
//                                 </div>
//                                 <div className="column rp">
//                                     <h5>Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</h5>
//                                     <h2>
//                                         <a className="ui teal tag label">Price: 650</a>
//                                     </h2>
//                                     <h3 className="ui brown block header">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.</h3>
//                                     <p>men's clothing</p>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>

//         );
//     }
// }
// const mapStateToProps = state => {
//     return {
//         _products: state._todoProduct,
//     };
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         ProductsRequest: () => dispatch(Products()),
//         AddCart: item => dispatch(AddCart(item))

//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Home)


