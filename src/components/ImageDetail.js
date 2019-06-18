import React from "react";
import Image from "./Image";
import { clearSelectedImage } from "../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../styles/ImageDetail.css";

const ImageDetail = ({ selectedImage, clearSelectedImage }) => (
  <div className="ImageDetail">
    {selectedImage ? (
      <>
        <h1>{selectedImage.author}</h1>
        <Image image={selectedImage} />
        <button onClick={clearSelectedImage}>Clear</button>
      </>
    ) : (
      <div>No image selected</div>
    )}
  </div>
);

const mapStateToProps = state => ({
  selectedImage: state.images[state.selected]
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({clearSelectedImage}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);
