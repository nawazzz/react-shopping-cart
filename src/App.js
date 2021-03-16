import React from "react";
import logo from './logo.svg';
import './App.scss';
import List from "./List"
import Cart from "./Cart"
import image from "./cart-image.jpg"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productDetail: [{title: "Cat Tee Grey T-Shirt",
                      price: 13.25,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/6090484789343891_1.jpg",
                      size: ["S", "M", "L"],
                      quantity: 1
                      },
                      {title: "Tso 3D Black T-Shirt",
                      price: 18.7,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/51498472915966370_1.jpg",
                      size: ["XL", "ML", "XXL"],
                      quantity: 1
                      },
                      {title: "Dark Thug Maroon T-Shirt",
                      price: 29.45,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/39876704341265610_1.jpg",
                      size: ["ML", "XS"],
                      quantity: 1
                      },
                      {title: "Tso 3D Short Sleeve T-Shirt A",
                      price: 10.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/10547961582846888_1.jpg",
                      size: ["XL", "ML"]
                      },
                      {title: "Red Pewdiepie Cool T-Shirt",
                      price: 12.5,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/100_1.jpg",
                      size: ["XL", "XXL"],
                      quantity: 1
                      },
                      {title: "Sphynx Tie Dye Wine T-Shirt",
                      price: 9.00,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/10686354557628304_1.jpg",
                      size: ["XL"],
                      quantity: 1
                      },
                      {title: "Skuul",
                      price: 14.00,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/11033926921508488_1.jpg",
                      size: ["XXL"]
                      },
                      {title: "Crazy Monkey Grey",
                      price: 134.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/11600983276356164_1.jpg",
                      size: ["S", "M"]
                      },
                      {title: "Black Beard T-Shirt",
                      price: 11.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/12064273040195392_1.jpg",
                      size: ["S", "L"]
                      },
                      {title: "Cat Tee Black T-Shirt",
                      price: 10.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/8552515751438644_1.jpg",
                      size: ["M", "L"]
                      },
                      {title: "White DGK Script Tee",
                      price: 14.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/876661122392077_1.jpg",
                      size: ["M", "XXL"]
                      },
                      {title: "Born On The Streets",
                      price: 25.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/9197907543445676_1.jpg",
                      size: ["M", "XXL", "XL"]
                      },
                      {title: "Sphynx Tie Dye Grey T-Shirt",
                      price: 10.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/18644119330491310_1.jpg",
                      size: ["M", "XS", "XL"]
                      },
                      {title: "Crazy Monkey Black T-Shirt",
                      price: 22.5,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/18532669286405344_1.jpg",
                      size: ["XS", "XL"]
                      },
                      {title: "Danger Knife Grey",
                      price: 14.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/11854078013954528_1.jpg",
                      size: ["XS", "XL"]
                      },
                      {title: "Short Sleeve T-Shirt",
                      price: 75.00,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/10412368723880252_1.jpg",
                      size: ["XS", "XL"]
                      },
                      {title: "White Pewdiepie Hot T-Shirt",
                      price: 20.9,
                      id: Math.floor(Math.random()*90000) + 10000,
                      image: "https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/101_1.jpg",
                      size: ["XS", "XL"]
                      }],
      filteredItems: [],
      selectedSize: [],
      itemsInCart: [],
      isCartOpen: false,
      cartSubtotal: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemsInCart.length !== this.state.itemsInCart.length) {
      this.setState({
        cartSubtotal: this.state.itemsInCart.reduce((acc, val) => acc + val.price, 0)
      })
    }
  }
 
  filterSize = (e) => {
      if (e.target.textContent === "S" || e.target.textContent === "XS" || e.target.textContent === "M" || e.target.textContent === "L" || e.target.textContent === "XL" || e.target.textContent === "XXL" || e.target.textContent === "ML") {
        this.setState({
          selectedSize: this.state.selectedSize.length? this.state.selectedSize.concat([e.target.textContent]) : [e.target.textContent]
        }) 
        // console.log(this.state.selectedSize)
      }
      const savedSize = this.state.productDetail && this.state.productDetail.filter((elm, index) => {
        for (let i = 0; i < this.state.selectedSize.length; i++) {
          if (elm.size.includes(this.state.selectedSize[i])) {
            return true
          }
        }
      })    
      console.log(savedSize)
    this.setState({
      filteredItems: savedSize
    })
  }

  sortPrice = (e) => {
    if (e.target.value === "Highest to Lowest") {
      const sortFromHighest = this.state.productDetail.sort((a, b) => {
        return b.price - a.price
      }) 
    } 
    this.setState({
      filteredItems: this.state.sortFromHighest
    })
    if (e.target.value === "Lowest to Highest") {
      const sortFromLowest = this.state.productDetail.sort((a, b) => {
        return a.price - b.price
      })
    }
    this.setState({
      filteredItems: this.state.sortFromLowest
    })
  }
  clickCartIconToOpenCart = (e) => {
    if (this.state.isCartOpen === false) {
      this.setState({
        isCartOpen: true
      })
    }     
  }

  clickToCloseCart = (e) => {
    console.log(e)
    if (this.state.isCartOpen === true) {
      this.setState({
        isCartOpen: false
      })
    }
  }

  addProductElementInCart = (e) => {
    const addToCart = this.state.productDetail.filter((elm, index) => {
      if (e.id === elm.id) {
        return true
      }
    })
    this.setState({
      itemsInCart: this.state.itemsInCart.length? this.state.itemsInCart.concat(addToCart) : (addToCart),
    })
  }
  deleteItemFromCart = (elm) => {
    const itemsAfterDeletion = this.state.itemsInCart.filter((obj, index) => {
         if (obj.id !== elm.id) {
            return true
         }
    })
    this.setState({
      itemsInCart: itemsAfterDeletion
    })
  }


  render() {  
    return (
      <div className="App">
        <div className="topMostIconContainer" onClick={this.clickCartIconToOpenCart}>
          <img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/bag-icon.png"/><span className="itemCountInCartIcon">{this.state.itemsInCart.length}</span>
        </div>
        <div className="sortMenuContainer">
          <div className="countProductsFoundContainer">
            <p className="countProductsFound">{this.state.filteredItems? this.state.filteredItems.length : this.state.productDetail.length} Product(s) found</p>
          </div>
          <div>
            <label>Order By:  </label>
            <select 
            onChange={this.sortPrice}
            >
              <option>Select</option>
              <option>Highest to Lowest</option>
              <option>Lowest to Highest</option>
            </select>          
          </div>
        </div>
        <div className="heroContainer">
          <div className="sizeContainer">
            <p className="sizes">Sizes:</p>
            <div className="typesOfSize" onClick={this.filterSize}>
              <button>S</button>
              <button>XS</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
              <button>ML</button>
            </div>
          </div>
          <List productDetail={this.state.productDetail} addItemToCart={this.addItemToCart} filteredItems={this.state.filteredItems} selectedSize={this.state.selectedSize} sortPrice={this.sortPrice} addProductElementInCart={this.addProductElementInCart} cartSubtotal={this.state.cartSubtotal} cartPriceSubtotal={this.cartPriceSubtotal}/>  
        </div>
        <Cart productDetail={this.state.productDetail} filteredItems={this.state.filteredItems} selectedSize={this.state.selectedSize} itemsInCart={this.state.itemsInCart} isCartOpen={this.state.isCartOpen} addItemToCart={this.addItemToCart} clickCartIconToOpenCart={this.clickCartIconToOpenCart} addProductElementInCart={this.addProductElementInCart} clickToCloseCart={this.clickToCloseCart} deleteItemFromCart={this.deleteItemFromCart} cartSubtotal={this.state.cartSubtotal} cartPriceSubtotal={this.cartPriceSubtotal}/>
      </div>
    );
  }
}

export default App;
