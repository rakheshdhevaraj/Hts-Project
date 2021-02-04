import React, { useEffect, useState } from "react";
import "./content.css";
import Product1 from "../assest/prod01.png";
import Data from "../json/data";

export default function Content() {
  const [products, setProducts] = useState([]);
  const [addedProduct, setAddedProduct] = useState({});
  useEffect(() => {
    setProducts(Data[0].products);
  }, []);
  const removeServiceFromSelected = (item) => {
    let tempObj = Object.assign({}, addedProduct);
    if (tempObj[item.productId]) {
      if (tempObj[item.productId].count === 1) delete tempObj[item.productId];
      else tempObj[item.productId].count -= 1;

      setAddedProduct(tempObj);
    }
  };

  const addtoServiceToSelected = (item) => {
    // add service

    let tempObj = Object.assign({}, addedProduct);
    if (tempObj[item.productId] === undefined) {
      tempObj[item.productId] = item;
      tempObj[item.productId].count = 1;
    } else tempObj[item.productId].count += 1;

    setAddedProduct(tempObj);
  };
  return (
    <>
      <div className="content">
        <div className="container">
          {/* Filter  */}
          <h3>Wearable Technology</h3>
          <div className="filterBox">
            <div className="heading">
              <h4>Refine</h4>
            </div>
            <div className="filterList">
              {/* Filter by department  */}
              <b>Department</b>
              <ul>
                {Data[0].department.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>

            <div className="filterCheckBox">
              {/* Filter by brand  */}
              <b>Brand</b>
              <ul>
                {Data[0].brands.map((item) => (
                  <li key={item}>
                    <input type="checkbox"></input>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="productContainer">
            {/* Product Container  */}
            {products.map((item) => (
              <div className="productCard">
                {/* Product card  */}
                <div className="imgBox">
                  {item.toplabel && <span>Top rated</span>}
                  <img src={item.src}></img>
                </div>
                <div className="detailBox">
                  <h4>{item.description}</h4>
                  {/* if inventory quantity(stock) has more than 0 shows add or else it shows out of stock */}
                  {item.inventoryQuantity > 0 ? (
                    <>
                      <a
                        style={{
                          visibility: item.freeShipping ? "visible" : "hidden",
                        }}
                      >
                        Free Shipping
                      </a>
                      <div className="price">
                        {item.oldPrice != "" && (
                          <span className="oldPrice">$ {item.oldPrice}</span>
                        )}
                        {item.newPrice != "" && (
                          <span className="newPrice">
                            {Math.floor(parseInt(item.newPrice))}
                            <sup>{item.newPrice.split(".")[1]}</sup>
                          </span>
                        )}
                      </div>

                      {addedProduct[item.productId] === undefined ? (
                        <div className="cartButton">
                          {/* If stock has zero */}
                          <button onClick={() => addtoServiceToSelected(item)}>
                            Buy
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="qtyBox">
                            {/* To reduce cart count value */}
                            <button
                              onClick={() => removeServiceFromSelected(item)}
                            >
                              -
                            </button>
                            {/* current stock value*/}
                            <input
                              value={
                                addedProduct[item.productId] === undefined
                                  ? 0
                                  : addedProduct[item.productId].count
                              }
                            ></input>
                            {/* To add cart count value */}
                            <button
                              onClick={() => addtoServiceToSelected(item)}
                            >
                              +
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="outofstock">
                        <button>Out Of Stock</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <h3>Buying Trend</h3>

          <div className="trend">
            <div className="graph"></div>

            <span>See More</span>
          </div>
          <div className="ads">
            <div className="detailBox">
              <h4>4 days only - 98 left</h4>
              <p className="description">
                KitchenAid Classic 4.5-Qt Stand Mixer
              </p>
              <span className="price">
                $199<sup>98</sup>
              </span>
              <span className="strike">$xxxxxx</span>
              <span className="ordertype">Free Shipping</span>

              <span className="highlight">Why we love it</span>
              <p>
                The Professional Stand Mixer is perfect for heavy, dense
                mixtures. Mix, knead and whip ingredients into culinary
                masterpieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
