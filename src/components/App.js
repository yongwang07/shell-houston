import React, { Component } from "react";
import Footer from "./Footer";
import ImageDetail from "./ImageDetail";
import Header from "./Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadImageState } from "../configs/constants";
import ImageList from "./ImageList";
import AppState from "./AppState";
import { getImages } from "../redux/actions";
import "../styles/App.css";

class App extends Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    const { loadImage } = this.props
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          {
            loadImage !== loadImageState.LOAD ? 
              <AppState state={loadImage} /> : 
              <>
                <div className="App-left">
                  <h3>Image List</h3>
                  <ImageList />
                </div>
                <div className="App-right">
                  <ImageDetail />
                </div>
              </>
          }              
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  images: state.images,
  loadImage: state.loadImageState
});
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({getImages}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
