import React, { Component } from 'react';
import './style/css/App.css';
import logo from './kisspng-amazon-com-dinner-in-camelot-the-night-america-s-amazon-5acae7b10f8e97.7644296015232470250637.png';
import SearchRes from './SearchRes';

const cates = ["All", "Banana", "Orange", "Apple", "Mango"];
const PRODUCT_API = "https://n3az8lcyj2.execute-api.us-east-2.amazonaws.com/playground/getproducts";

class SearchBar extends Component {
  render() {
    return (
      <div className="search_bar"> 
        <div className="logo"><img id="logo" alt="amazon logo" src={logo}/></div>
        <div className="input_box">
          <div className="cate">
            <select>
              {cates.map((val, idx) => {
                return <option value={idx}>{val}</option>
              })}
            </select>
          </div>
          <input type="text"></input>
          <div className="search_button">
            <button><i className="fa fa-search"></i></button>
          </div>
        </div>
        <div className="cart">
          <i className="fas fa-cart-plus"></i>
        </div>
      </div>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch(PRODUCT_API)
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            products: data
          })
        }
      )
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="App">
        <SearchBar />
        <SearchRes />
      </div>
    );
  }
}

export default App;
