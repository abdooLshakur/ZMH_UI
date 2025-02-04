import React from 'react';
import Banner from './Banner';
import BestSelling from './BestSelling';
import Footer from './Footer';
import LimitedTimeOffer from './LimitedTimeOffer';
import Navigation from './/Navigation';
import ShopByCategory from './ShopByCategory';
import Spotlight from './Spotlight';
import TrendingNow from './TrendingNow';
import WhyChooseUs from './WhyChooseUs';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Homepage() {
  return (
    <div>
       {/* Toast Notification Container */}
       <ToastContainer />
      <Navigation/>
      <Banner/>
      <ShopByCategory/>
      <TrendingNow/>
      <LimitedTimeOffer/>
      <BestSelling/>
      <Spotlight/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  );
}

export default Homepage;
