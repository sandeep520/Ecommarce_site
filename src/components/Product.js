import React, { Component } from 'react'
import { Products, AddCart } from '../actions'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Form from './Form'
import BasicModal from './modal';
import Modal from './modal'
import { model } from '../actions/index'
import Image from '../Images/cake1.jpg'



export class Product extends Component {
    constructor(props) {
        super(props)


    }


    // componentDidMount() {
    //     // all data dispatch in ProductsRequest
    //     // this.props.ProductsRequest();
    //     // console.log(this.props.ProductsRequest())
    // }



    onFinish = (values) => {
        this.props.modelhandler(values);
        console.log('this.props.array', this.props.productList)
    }





    render() {
        // const { _products, id } = this.props._products;
        // console.log(_products)
        // if (_products.length > 0) {
        return (
            <>

                <br></br>
                <br></br>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-md-12">
                        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>

                            {
                                this.props.productList?.map(({ productName, price, description, image, categories }, item) => {
                                    {/* console.log(image) */ }

                                    return (
                                        <>
                                            <div class="card" style={{ width: '20rem', margin: '18px', borderRadius: '1.25rem' }}>

                                                <img style={{ height: '273px' }} class="card-img-top" src={Image} alt="Card image cap" />

                                                <div class="card-body">
                                                    <h5 class="card-title">Product Name : {productName}</h5>
                                                    <h5 class="card-title">Price: {price}$</h5>
                                                    <h5 class="card-title">Description: {description}</h5>
                                                    <h5 class="card-title">Categories: {categories}</h5>
                                                    <button style={{ marginRight: '15px' }} class="btn btn-primary" onClick={() => this.props.AddCart(item)}>Add to cart</button>
                                                    {/* <a href="#" class="btn btn-primary">Add to cart</a> */}
                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Modal model={this.props.modelhandler} onFinish={this.onFinish} />
                </div>
            </>
        )
    }
    // return(
    //         <div class = "d-flex justify-content-center" >
    //     <div class="spinner-border" role="status">
    //         <span class="sr-only"></span>
    //     </div>
    //         </div>
    //     )

}


const mapStateToProps = state => {
    return {
        _products: state._todoProduct,
        productList: state._todoProduct.array,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        ProductsRequest: () => dispatch(Products()),
        AddCart: item => dispatch(AddCart(item)),
        modelhandler: item => dispatch(model(item)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product)
























































{/* <div key={index} className="col-md-2" style={{ marginBottom: '40px' }}>
                                                <img src={item.image} className="img-resposive" style={{ width: '60%', height: '250px' }} />
                                                <div className="details" style={{ marginLeft: '20px' }}>
                                                    <h5>{item.title}</h5>
                                                    <h5>{item.price}</h5>
                                                    <h5>{item.category}</h5>
                                                </div>
                                                <button className="btn " style={{ cursor: 'pointer', width: '170px', marginLeft: '20px', background: '#157DEC' }} onClick={() => this.props.AddCart(item)}>Add Cart</button>
                                            </div> */}