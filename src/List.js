import React from "react"
import "./List.scss"


class List extends React.Component {

  render() {
    return(
      <React.Fragment>
      <div class="mainContainer">
        {this.props.filteredItems && this.props.filteredItems.length >= 1 ?
          this.props.filteredItems.map((elm, index) => {
            return(
            <div 
            className="cardContainer">
              <div className="freeShipping">
                <p>Free shipping</p>
              </div>
              <div className="imageContainer">
                <img src= {elm.image}/>
              </div>
              <div className="productDetailContainer">
                <div>
                  <h5 className="productTitle">{elm.title}</h5>
                </div>
                <div className="orangeBorder">
                </div>
                <div className="priceContainer">
                  <span className="dollarSign">$</span><span className="price">{elm.price}</span>
                </div>
              </div> 
              <div
              className="addToCartContainer"
              onClick={() => this.props.addProductElementInCart(elm)}
              >
                <a href="xxx">Add to cart</a>
              </div>         
            </div>
            )
          }) :
          this.props.productDetail.map((elm, index) => {
            return(
              <div className="cardContainer">
                <div className="freeShipping">
                  <p>Free shipping</p>
                </div>
                <div className="imageContainer">
                  <img src= {elm.image}/>
                </div>
                <div className="productDetailContainer">
                  <div>
                    <h5 className="productTitle">{elm.title}</h5>
                  </div>
                  <div className="orangeBorder">
                  </div>
                  <div className="priceContainer">
                    <span className="dollarSign">$</span><span className="price">{elm.price}</span>
                  </div>
                </div> 
                <div onClick={() => this.props.addProductElementInCart(elm)} 
                className="addToCartContainer">
                  <a href="#">Add to cart</a>
                </div>         
              </div>
            )
          })}  
        </div>    
      </React.Fragment>
    )
  }
}
export default List;