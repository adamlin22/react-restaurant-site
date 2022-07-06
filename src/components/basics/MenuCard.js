import React from 'react';

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container">
        {/* // this map array method works like loop */}
        {menuData.map((currentElement) => {
          const { id, name, category, image, description } = currentElement;
          return (
            <>
              {/* always gave a unique key to each list elements while using map() */}
              <div className="card-container" key={id}>
                <div className=" card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span
                      className="card-author subtle" /*you can use inline css as a object like this, style={{color: "red"}} */
                    >
                      {category}
                    </span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
