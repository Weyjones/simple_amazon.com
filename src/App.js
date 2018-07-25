import React, { Component } from 'react';
import './App.css';
import logo from './kisspng-amazon-com-dinner-in-camelot-the-night-america-s-amazon-5acae7b10f8e97.7644296015232470250637.png';

const cates = ["All", "Banana", "Orange", "Apple", "Mango"];


class SearchRes extends Component {
  render() {
    return (
      <div className="search_res">
        
      </div>
    )
  }
}


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
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
