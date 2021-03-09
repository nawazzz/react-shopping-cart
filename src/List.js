import React from "react"
import "./List.scss"

class List extends React.Component {

  render() {

    return(
      <React.Fragment style={{width: "100%"}}>
      <div class="mainContainer">
        <div className="cardContainer">
          <div className="freeShipping">
            <p>Free shipping</p>
          </div>
          <div className="imageContainer">
            <img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/6090484789343891_1.jpg"/>
          </div>
          <div className="productDetailContainer">
            <div>
              <h5 className="productTitle">Cat Tee Grey T-Shirt</h5>
            </div>
            <div className="orangeBorder">
            </div>
            <div className="priceContainer">
              <span className="dollarSign">$</span><span className="price">13.25</span>
            </div>
          </div> 
          <div className="addToCartContainer">
            <a href="#">Add to cart</a>
          </div>         
        </div>
        <div className="cardContainer">
          <div className="freeShipping">
            <p>Free shipping</p>
          </div>
          <div className="imageContainer">
            <img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/5619496040738316_1.jpg"/>
          </div>
          <div className="productDetailContainer">
            <div>
              <h5 className="productTitle">Tso 3D Black T-Shirt</h5>
            </div>
            <div className="orangeBorder">
            </div>
            <div className="priceContainer">
              <span className="dollarSign">$</span><span className="price">18.7</span>
            </div>
          </div> 
          <div className="addToCartContainer">
            <a href="#">Add to cart</a>
          </div>         
        </div>  
        <div className="cardContainer">
          <div className="freeShipping">
            <p>Free shipping</p>
          </div>
          <div className="imageContainer">
            <img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/51498472915966370_1.jpg"/>
          </div>
          <div className="productDetailContainer">
            <div>
              <h5 className="productTitle">Dark Thug Blue-Navy T-Shirt</h5>
            </div>
            <div className="orangeBorder">
            </div>
            <div className="priceContainer">
              <span className="dollarSign">$</span><span className="price">29.45</span>
            </div>
          </div> 
          <div className="addToCartContainer">
            <a href="#">Add to cart</a>
          </div>         
        </div> 
      </div>     
      </React.Fragment>
    )
  }
}
export default List;