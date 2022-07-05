import React from 'react';
import './restaurant-style.css';

const Restaurant = () => {
  return (
    <>
      <div className="card-container">
        <div className=" card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span
              className="card-author subtle" /*you can use inline css as a object like this, style={{color: "red"}} */
            >
              Breakfast
            </span>
            <h2 className="card-title"> Maggi </h2>
            <span className="card-description subtle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              rerum at aspernatur nostrum magnam molestias similique earum.
              Iure, enim cum eveniet quas numquam aspernatur vitae ipsum tenetur
              error soluta? Voluptatum eligendi nulla laboriosam corporis.
            </span>
            <div className="card-read">Read</div>
          </div>
          <img src="" alt="images" className="card-media" />

          <span className="card-tag  subtle">Order Now</span>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
