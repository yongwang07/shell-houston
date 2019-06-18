import React from "react";
import Image from "./Image";
import { setSelectedImage } from "../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../styles/ImageList.css";

const ImageList = ({ images, setSelectedImage }) => (
  <div className="ImageList">
    {images.map((image, index) => (
      <Image key={index} image={image} onClick={setSelectedImage.bind(null, index)} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  images: state.images
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({setSelectedImage}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
