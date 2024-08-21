import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, autoSlideInterval = 2000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, autoSlideInterval); // Automatically advance every `autoSlideInterval` milliseconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [autoSlideInterval]);

    return (
        <div className="slider-container">
            <button className="slider-button prev" onClick={goToPrevious}></button>
            <img src={images[currentIndex]} alt="slider" className="slider-image" width="100%" />
            <button className="slider-button next" onClick={goToNext}></button>
        </div>
    );
};

export default ImageSlider;

