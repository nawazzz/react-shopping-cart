import React from "react";
import "./Cart.scss";
import image from "./cart-image.jpg"


class Cart extends React.Component {

    render() {

        return( 
        <React.Fragment>
          {this.props.isCartOpen === true ?
            (
            <div className="cartMainContainer">
              <div  className="cartIconContainer">
                <div onClick={this.props.clickToCloseCart} className="cartCloseButtonContainer">
                  <p className="cartCloseButton">X</p>
                </div>
                <div 
                className="topMostIconContainer" 
                // onClick={this.props.handleCartSelection}
                >
                  <img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/bag-icon.png" />
                  <p className="itemCountInCartIcon">{this.props.itemsInCart.length}</p>
                </div>
              </div>
              <h5>Cart</h5>

              <div className="cartHeroContainer" style={{display: "flex"}}>
                  <div className="containerBelowX">
                  </div>
                <div className="parentOfcheckoutAndListContainers">
                  {this.props.itemsInCart.length === 0 ? 
                  (
                    <div className="addProductsInCartContainer">
                      <p className="addSomeProduct">Add some products in the cart</p>
                      <p className="addSomeProduct">:)</p>
                    </div>
                  ) : (
                
                  <div className="listElementContainer">
                    {this.props.itemsInCart.map((elm, index) => {
                      return (
                      <ul>
                        <li>
                            <div className="itemDetailInCartContainer">
                              <img src={elm.image}/>
                              <div>
                                <h6 className="styleTitleText">{elm.title}</h6>
                                <p className="styleQuantityText">Quantity: </p> 
                              </div>
                            </div>
                            <div className="removeButtonContainer" 
                            onClick={() => this.props.deleteItemFromCart(elm)}
                            >
                              <p 
                              style={{textAlign:"right"}} 
                              className="removeItemButton"
                              >X</p>
                              <p 
                              style={{color:"yellow"}}
                              className="styleDollarSign"
                              >$<span className="itemPrice">{elm.price}</span></p>
                            </div>
                        </li>
                      </ul>
                      )
                    })}
                  </div>
                  )
                  }
                  
                  <div className="checkoutContainerInCart">
                    <div className="subtotalContainerInCart">
                      <h6 className="subtotalHeading">SUBTOTAL
                      
                      </h6>                    
                      <p className="dollarSign">$ {this.props.cartSubtotal}</p>
                    </div>
                    <div className="checkoutHeadingContainer">
                      <h3>CHECKOUT</h3>
                    </div>
                  </div>          
                </div>
              </div>
            </div>
            ) : (
              <div style={{display:"none"}}>
              </div>
            )}   
        </React.Fragment>
        );
    }
}
export default Cart;