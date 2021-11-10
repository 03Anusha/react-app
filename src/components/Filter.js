import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-orderstage">
                    Filter{"  "}
                    <select value={this.props.orderStage} onChange={this.props.filterProducts} >
                        <option value=" ">all</option>
                        <option value="new">new</option>
                        <option value="processing">processing</option>
                        <option value="finished">finished</option>
                    </select>
                </div>

            </div>
        )
    }
}
