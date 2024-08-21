
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import React from 'react';
import Footer from './components/Footer'



function App() {
  const images = [
    './images/img_slider_2.jpg',
    './images/imgslider.jpg',
    './images/img_slider.png'
  ]
  return (
    <>
      <Navbar />
      <Slider images={images} autoSlideInterval={2000} />
      <Card />
      <Footer />
    </>
  );
}
export default App;
