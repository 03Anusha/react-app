import React from 'react';
import './App.css';
import Model from './components/Model';
import data from "./components/data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import EventCalendar from './components/EventCalendar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      orderStage: "",

    };
  }

  filterProducts = (event) => {
    // impl
    console.log(event.target.value);

    if (event.target.value === "") {
      this.setState({ orderStage: event.target.value, product: data.products });
    } else {

      this.setState({
        orderStage: event.target.value,
        products: data.products.filter(
          (product) => product.orderStage.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (

      <main>
        <div>
          <Model />
        </div>
        <div className="content">
          <div className="main">Products</div>
          <Filter count={this.state.products.length}
            orderStage={this.state.orderStage}
            filterProducts={this.filterProducts}
          ></Filter>
          <Products products={this.state.products}></Products>

          <EventCalendar />
        </div>

      </main>
    );
  }
}


export default App;
