import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hollandtex from "../ZMH Images/Hollantex.jpeg"

function TrendingNow() {
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
         
          setLoading(true);
          const response = await fetch(`${api}/api/Products`, {
          });
    
          if (!response.ok) {
            const errorMessage = await response.text();
    
            switch (response.status) {       
              case 500:
                toast.error("Server error. Please try again later.", "error");
                break;
    
              default:
                toast.error("Failed to add product to trending. Please try again.", "error");
            }
    
            // Log the error for debugging
            console.error(`HTTP Error: ${response.status}`, errorMessage);
    
            // Throw error to terminate further execution
            throw new Error(`HTTP Error: ${response.status}`);
          }
    
          const data = await response.json();
          const featuredData = (data || []).filter((item) => item.is_featured === true);
          const featuredResult = featuredData.length > 0 ? featuredData : [];

          console.log(featuredResult)
          setProduct(featuredResult);
        } catch (error) {
          if (error.message.includes("NetworkError")) {
            toast.warning("Network error. Please check your connection and try again.", "error");
          } else {
            toast.warning("Failed to fetch categories. Please try again.", "error");
          }
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
                <p>Popular Products</p>
                <h2>Trending Now</h2>
                <span></span>
            </div>
            <div className='Trending-products-wrapper'>
                <div>
                    <img className='trending-product-img' src={Hollandtex} alt='HollandTex' />
                    <h3 className='trending-product-name'>HollandTex Material</h3>
                    <span className='trending-product-category'>women</span>
                    <span className='trending-product-price'>₦ 10, 000</span>
                    <div className='trending-product-colors'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='trending-pdt-star-rating'>✩✩✩✩✩</div>
                </div>
                <div>
                    <img className='trending-product-img' src={Hollandtex} alt='HollandTex' />
                    <h3 className='trending-product-name'>HollandTex Material</h3>
                    <span className='trending-product-category'>women</span>
                    <span className='trending-product-price'>₦ 10, 000</span>
                    <div className='trending-product-colors'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='trending-pdt-star-rating'>✩✩✩✩✩</div>
                </div>
                <div>
                    <img className='trending-product-img' src={Hollandtex} alt='HollandTex' />
                    <h3 className='trending-product-name'>HollandTex Material</h3>
                    <span className='trending-product-category'>women</span>
                    <span className='trending-product-price'>₦ 10, 000</span>
                    <div className='trending-product-colors'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='trending-pdt-star-rating'>✩✩✩✩✩</div>
                </div>
                <div>
                    <img className='trending-product-img' src={Hollandtex} alt='HollandTex' />
                    <h3 className='trending-product-name'>HollandTex Material</h3>
                    <span className='trending-product-category'>women</span>
                    <span className='trending-product-price'>₦ 10, 000</span>
                    <div className='trending-product-colors'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='trending-pdt-star-rating'>✩✩✩✩✩</div>
                </div>
                <div>
                    <img className='trending-product-img' src={Hollandtex} alt='HollandTex' />
                    <h3 className='trending-product-name'>HollandTex Material</h3>
                    <span className='trending-product-category'>women</span>
                    <span className='trending-product-price'>₦ 10, 000</span>
                    <div className='trending-product-colors'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='trending-pdt-star-rating'>✩✩✩✩✩</div>
                </div>
                <div>
                    <img className='trending-product-img' src={Hollandtex} alt='HollandTex' />
                    <h3 className='trending-product-name'>HollandTex Material</h3>
                    <span className='trending-product-category'>women</span>
                    <span className='trending-product-price'>₦ 10, 000</span>
                    <div className='trending-product-colors'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='trending-pdt-star-rating'>✩✩✩✩✩</div>
                </div>
                <div>
                    <img className='trending-product-img' src={Hollandtex} alt='HollandTex' />
                    <h3 className='trending-product-name'>HollandTex Material</h3>
                    <span className='trending-product-category'>women</span>
                    <span className='trending-product-price'>₦ 10, 000</span>
                    <div className='trending-product-colors'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='trending-pdt-star-rating'>✩✩✩✩✩</div>
                </div>
            </div>
        </div>
    );
}

export default TrendingNow;