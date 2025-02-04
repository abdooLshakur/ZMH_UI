import Hollandtex from "../ZMH Images/Hollantex.jpeg"
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function BestSelling() {
        const [ProductData, setProduct] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const [isSidebarOpen, setIsSidebarOpen] = useState(true);
        const navigate = useNavigate();
        // const api = "https://zmh-api.onrender.com"
        const api = "http://localhost:9000"
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
          
            try {
              console.log("Fetching products from:", `${api}/api/user-Products`);
          
              const response = await fetch(`${api}/api/Products`, {
                headers: { "Content-Type": "application/json" },
                method: "GET"
              });
          
              console.log("Response Status:", response.status);
          
              if (!response.ok) {
                const errorMessage = await response.text();
                console.error(`HTTP Error: ${response.status}`, errorMessage);
          
                switch (response.status) {
                  case 500:
                    toast.error("Server error. Please try again later.");
                    break;
                  default:
                    toast.error("Failed to fetch products. Please try again.");
                }
          
                throw new Error(`HTTP Error: ${response.status}`);
              }
          
              const data = await response.json();
              console.log("Fetched Data:", data);
          
              // Ensure the response is structured correctly
              const productArray = Array.isArray(data.data) ? data.data : [];
          
              // Apply filter only if productArray is an array
              const trendingData = productArray.filter((item) => item.is_trending === true);
              const trendingResult = trendingData.length > 0 ? trendingData : [];
              setProduct(trendingResult)
            } catch (error) {
              console.error("Fetch error:", error);
              toast.error(error.message.includes("NetworkError")
                ? "Network error. Please check your connection and try again."
                : "Failed to fetch products. Please try again."
              );
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
          
          useEffect(() => {
            fetchProduct();
          }, []);
          
          
    return (
        <div className="trendingNow-wrapper">
            <div className="trendingNow-header">
                <p>SHOP</p>
                <h2>Best Selling</h2>
                <span></span>
            </div>
              <div className="Trending-products-wrapper">
      {ProductData.map((product) => (
        <div key={product.id}>
          <img className="trending-product-img" src={`${api}/${product.images}`} alt={product.name} />
          <h3 className="trending-product-name">{product.brand}</h3>
          <span className="trending-product-category">{product.category}</span>
          <span className="trending-product-price">{product.price}</span>
          <div className="trending-product-colors">
            {/* {product.colors.map((color, index) => (
              <div key={index} style={{ backgroundColor: color, width: "20px", height: "20px" }}></div>
            ))} */}
          </div>
          <div className="trending-pdt-star-rating">{product.rating}</div>
        </div>
      ))}
    </div>
        </div>
    );
}

export default BestSelling;