import logo from './logo.svg';
import './App.scss';
import List from "./List"

function App() {
  return (
    <div className="App">
      <div className="heroContainer">
        <div className="sizeContainer">
          <p className="sizes">Sizes:</p>
          <div className="typesOfSize" >
            <p className="sizeMeasurement"><br/>S</p>
            <p className="sizeMeasurement"><br/>XS</p>
            <p className="sizeMeasurement"><br/>M</p>
            <p className="sizeMeasurement"><br/>L</p>
            <p className="sizeMeasurement"><br/>XL</p>
            <p className="sizeMeasurement"><br/>XXL</p>
            <p className="sizeMeasurement"><br/>ML</p>
          </div>
        </div>
        <List/>
      </div>
    </div>
  );
}

export default App;
