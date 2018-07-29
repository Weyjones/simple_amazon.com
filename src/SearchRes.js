import React, { Component } from 'react';
import './SearchRes.css';

  class Item extends Component {
    render() {
      return (
        <div className="item" key={this.props.key}>
          <div className="item_left">
            <div className="item_image">
                <img src="http://via.placeholder.com/200x180" alt="item Img" />
            </div>
          </div>
          <div className="item_right">
            <div className="item_title"> 
                <a href="#"><h2>This is a tmp title.</h2></a>
            </div>
            <div className="item_seller">
                <p>This is a tmp seller.</p>
            </div>
            <div className="item_info"> 
                <div className="info_left">
                    <div className="price">$10.32/Ounce</div>
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
                        <h7>Product Description</h7>
                        <p>... in which it operates. The Italian food tradition of superior quality and ...</p>
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
      let items = [1,2,3,4,5,6,7,8];  
      return (
        <div className="search_res">
            {items.map((val,idx) => <Item key={idx}/>)}
        </div>
      )
    }
  }


export default SearchRes;