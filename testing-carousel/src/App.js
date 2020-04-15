import React from 'react';

import Slider from './components/Slider';
import CustomBuildSwiper from './components/custom';
// import 'react-id-swiper/lib/styles/scss/swiper.scss';
import 'swiper/swiper.scss'
import './style.scss';


function App() {
  return (
    <div className="App">
      <Slider />
      {/* <CustomBuildSwiper /> */}
    </div>
  );
}

export default App;
