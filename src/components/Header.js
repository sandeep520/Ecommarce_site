import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import '../App.css'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export class Header extends Component {

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar  navbar-dark bg-dark" style={{ height: '60px', fontSize: '24px' }}>
                            <ul className="nav">
                                <li className="nav-item" ><Link to="/home" cslassName="nav-link">Home</Link></li>
                                <li className="nav-item" ><Link to="/" className="nav-link ">Product</Link></li>
                                <li className="nav-item" ><Link to="/about" className="nav-link ">About Us</Link></li>
                                {/* <li className="nav-item" ><Link to="/form" className="nav-link ">Form</Link></li> */}


                            </ul>
                            <ul>
                                <li className="nav-item"><Link to="/carts" className="nav-link"> Carts : { this.props?.numberCart?._todoProduct?.cart?.length}</Link></li>

                            </ul>
                        </nav>
                    </div>
                </div>


            </>




        )
    }
}
const mapStateToProps = state => {
    return {
        numberCart: state
    }
}
export default connect(mapStateToProps, null)(Header)
