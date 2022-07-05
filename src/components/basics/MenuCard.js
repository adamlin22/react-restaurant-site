import React from 'react';

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container">
        {/* // this map array method works like loop */}
        {menuData.map((currentElement) => {
          return (
            <>
              {/* always gave a unique key to each list elements while using map() */}
              <div className="card-container" key={currentElement.id}>
                <div className=" card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {currentElement.id}
                    </span>
                    <span
                      className="card-author subtle" /*you can use inline css as a object like this, style={{color: "red"}} */
                    >
                      {currentElement.category}
                    </span>
                    <h2 className="card-title"> {currentElement.name} </h2>
                    <span className="card-description subtle">
                      {currentElement.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    // see in vscode how to get the images folder in menuApi with dot notation directory changing method
                    src={currentElement.image}
                    alt="images"
                    className="card-media"
                  />

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
