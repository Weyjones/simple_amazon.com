import React, { Component } from 'react';
import './SearchRes.css';

  class Item extends Component {
    render() {
      let product = this.props.product;
      return (
        <div className="item" >
          <div className="item_left">
            <div className="item_image">
                <img src="http://via.placeholder.com/200x180" alt="item Img" />
            </div>
          </div>
          <div className="item_right">
            <div className="item_title"> 
                <a href="#"><h2>{product.Title}</h2></a>
            </div>
            <div className="item_seller">
                <p>{"by " + product.Seller}</p>
            </div>
            <div className="item_info"> 
                <div className="info_left">
                    <div className="price">{"$" + product.Price}</div>
                </div>
                <div className="info_right">
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <div>
                        <h4>Product Description</h4>
                        <p>{product.Description}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  class SearchRes extends Component {
    render() {
      let items = this.props.products;  
      return (
        <div className="search_res">
            {items.map((val,idx) => <Item key={idx} product={val}/>)}
        </div>
      )
    }
  }


export default SearchRes;