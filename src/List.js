import React from "react"

class List extends React.Component {

  render() {

    return(
      <React.Fragment>
        <div>
          <div>
            <img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/6090484789343891_1.jpg"/>
          </div>
          <div>
            <h5>Cat Tee Grey T-Shirt</h5>
          </div>
          <div style={{background: "orange", height: "2px", width: "30px", textAlign: "center"}}>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default List;