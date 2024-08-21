import React from 'react';


export default function Example() {
    return (
        <div className='Navbar'>
            <div className='row-7'>
                <div className="grid grid-cols-8 bg-white p-5 text-p-500 shadow-lg">
                    <div className="image text-center ">
                        <a href="http://localhost:3000/"><img src="/images/download.png" alt="Logo" /></a>
                        <span className='photo text-red-500'><strong>MC DONALDS</strong></span>
                    </div>
                    <h3 className='navbar'><a href="https://mcdonalds.com.pk/full-menu"><strong>Our Menu</strong></a></h3>
                    <h3 className='navbar'><a href="https://mcdonalds.com.pk/about-our-food/" ><strong>About our Food</strong></a></h3>
                    <h3 className='navbar'><a href="https://mcdonalds.com.pk/your-right-to-know/"><strong>Your Right To Know</strong></a></h3>
                    <h3 className='navbar'><a href="https://mcdonalds.com.pk/our-app/"><strong>Our App</strong></a></h3>
                    <h3 className='navbar'><a href="https://mcdonalds.com.pk/our-family/"><strong>Family</strong></a></h3>
                    <h3 className='navbar'><a href="https://mcdonalds.com.pk/trending-now/"><strong>Trending Now</strong></a></h3>
                    <button className="btn-warning px-2 py-1 text-xs bg-yellow-500 text-white rounded" >Order on McDelivery</button>

                </div>
            </div >
        </div >

    )
}
