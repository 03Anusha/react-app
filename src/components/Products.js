import React, { Component } from 'react'
export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product) => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>

                                    <p>
                                        {product.orderStage},{" "}
                                        {product.orderName},{" "}
                                        {product.orderId},{" "}
                                        {product.orderDate}
                                    </p>
                                </a>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


