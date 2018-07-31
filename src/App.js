import React, { Component } from 'react';
import './style/css/App.css';
import logo from './kisspng-amazon-com-dinner-in-camelot-the-night-america-s-amazon-5acae7b10f8e97.7644296015232470250637.png';
import SearchRes from './SearchRes';

const cates = ["All", "Banana", "Orange", "Apple", "Mango"];
const PRODUCT_API = "https://n3az8lcyj2.execute-api.us-east-2.amazonaws.com/playground/getproducts";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: ""
    }
  }
  handleInput = (event) => {
    this.setState({
      keyWord: event.target.value
    })
  }

  render() {
    let keyWord = this.state.keyWord;
    return (
      <div className="search_bar"> 
        <div className="logo"><img id="logo" alt="amazon logo" src={logo}/></div>
        <div className="input_box">
          <div className="cate">
            <select>
              {cates.map((val, idx) => {
                return <option key={idx} value={idx}>{val}</option>
              })}
            </select>
          </div>
          <input type="text" onKeyUp={(event) => this.handleInput(event)}></input>
          <div className="search_button">
            <button onClick={ () => this.props.filterKeyword(this.state.keyWord)}><i className="fa fa-search"></i></button>
          </div>
        </div>
        <div className="cart">
          <Cart
            inCart={["item1", "item2"]} 
            editCart={this.props.editCart}
            inCart={this.props.inCart}/>
        </div>
      </div>
    )
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: this.props.inCart
    }
  }

  handleRemove = (val) => {
    this.props.editCart(val, false);
  } 

  render() {
    let inCart = this.props.inCart;
    return (
      <div>
        <i className="fas fa-cart-plus"></i>
        <div className="cart_content">
          {
            inCart.length === 0 
              ? <p> {"Cart is Empty"} </p>
              : inCart.map((val, idx) => {
                return (
                  <div key={idx} className="cart_item">
                    <p> {val.Title} </p>
                    <button onClick={() => this.handleRemove(val)}>Remove</button>
                  </div>
                )
              })
          }
        </div>
      </div>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchProducts: [],
      noResult: false,
      inCart: []
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

  editCart = (item, isAdd) => {
    let inCarts = this.state.inCart;
    if (isAdd) {
      inCarts.push(item);
    } else {
      inCarts = inCarts.filter(product => product.Title != item.Title)
    }
    this.setState({
      inCart: inCarts
    })
  }

  filterKeyword = (word) => {
    let products = this.state.products;
    let searchResult = products.filter(product => {
      return product.Title.indexOf(word) > -1 || product.Description.indexOf(word) > -1;
    });
    if (searchResult.length >= 1) {
      this.setState({
        searchProducts: searchResult,
        noResult: false
      });
    } else {
      this.setState({
        searchProducts: searchResult,
        noResult: true
      });
    }
    
  }

  render() {
    let display = this.state.searchProducts.length > 0 ? this.state.searchProducts : this.state.products;
    return (
      <div className="App">
        <SearchBar 
          allProducts={this.state.products} 
          filterKeyword={this.filterKeyword} 
          editCart={this.editCart}
          inCart={this.state.inCart}/>
        {this.state.noResult ? 
          <h3>No Search Result</h3> :
          <SearchRes 
            editCart={this.editCart} 
            inCart={this.state.inCart} 
            products={display}/>
        }
      </div>
    );
  }
}

export default App;
