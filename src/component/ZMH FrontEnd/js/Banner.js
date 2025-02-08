import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback } from "react";
function Banner() {
    const [BannerImages, setBannerImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
    const navigate = useNavigate();
    const api = "https://zmh-api.onrender.com";


    const fetchBanner = async () => {
        setLoading(true);
        setError(null);
        try {
         
          const response = await fetch(`${api}/api/banners`, {
          });
    
          if (!response.ok) {
            const errorMessage = await response.text();
            switch (response.status) {
              case 500:
                console.log("Server error. Please try again later.", "error");
                break;
              default:
                console.log(`Error: ${errorMessage || "Failed to fetch banners."}`, "error");
            }
            throw new Error(`HTTP Error: ${response.status}`);
          }
    
          const data = await response.json();
          if (!data || !data.data) throw new Error("Invalid response structure from the server.");
    
          setBannerImages(data.data);
        //   console.log(data.data)
        } catch (error) {
          setError("Failed to fetch Banners. Please try again.");
          toast.error("Error fetching Banners. Please try again.", "error");
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchBanner();
      }, []);

    
    
      const colors = ["gold", "gold", "red"]; // Define button colors
    const [currentIndex, setCurrentIndex] = useState(0);
    const [buttonColor, setButtonColor] = useState(colors[0]);

    // Function to update the slide index and button color
    const updateSlide = (newIndex) => {
        setCurrentIndex(newIndex);
        setButtonColor(colors[newIndex % colors.length]);
    };

    // const goToNextSlide = () => {
    //     const nextIndex = (currentIndex + 1) % BannerImages.length;
    //     updateSlide(nextIndex);
    // };

    const goToPrevSlide = () => {
        const prevIndex = (currentIndex - 1 + BannerImages.length) % BannerImages.length;
        updateSlide(prevIndex);
    };

    const goToNextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % BannerImages.length);
    }, [BannerImages.length]);
    
    useEffect(() => {
        const slideInterval = setInterval(goToNextSlide, 4000);
        
        return () => clearInterval(slideInterval); // Cleanup function to prevent memory leaks
    }, [goToNextSlide]); // Only re-run if goToNextSlide function changes
    
    return (
        <div className="banner-wrapper" style={{ position: "relative", overflow: "hidden" }}>
            <div className="banner-images">
                {BannerImages.map((banner, index) => (
                    <div className="banner-img-div"
                        key={index}
                        style={{
                            display: index === currentIndex ? "block" : "none",
                            position: "relative",
                            width: "100%",
                            margin: "auto",
                        }}
                    >
                        <img src={`${api}/${banner.banner_img}`} alt={banner.alt} />
                        <div
                            className="banner-text"
                        >
                            <h1>{banner.banner_header}</h1>
                            <h3>{banner.banner_descp}</h3>
                            {/* <p>{banner.paragraph}</p> */}
                            <Link to={banner.banner_link}>
                            <button className="banner-button"
                            >
                                SHOP NOW
                            </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="BannerImg-prev"
                onClick={goToPrevSlide}
                style={{ color: buttonColor }}
            >
                <IoChevronBack />
            </button>
            <button
                className="BannerImg-next"
                onClick={goToNextSlide}
                style={{ color: buttonColor }}
            >
                <IoChevronForward />
            </button>
        </div>
    );
}

export default Banner;