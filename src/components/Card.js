


export default function Card() {
    return (
        <div className="containter">
            <div className='card-container'>
                <div className="card" >
                    <img src="./images/cafe.jpg" width="100%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>McCafe</strong></h5>
                        <p class="card-text">Browse our menu for more information on topics such as our tasty coffee and espresso drinks.</p>
                        <button className='btn-order'><a href="https://mcdonalds.com.pk/full-menu/mccafe/">Order Now</a></button>
                    </div>
                </div>
                <div className="card" >
                    <img src="./images/chips.jpg" width="100%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>McDelivery</strong></h5>
                        <p class="card-text">Delivering food at your doorsteps..</p>
                        <button className='btn-order-2'><a href="https://www.mcdelivery.com.pk/pk/">Order Now</a></button>
                    </div>
                </div>
                <div className="card" >
                    <img src="./images/App.jpg" width="100%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Our App </strong></h5>
                        <p class="card-text">McDonald's in your Pocket.</p>
                        <button className='btn-order'><a href="https://www.mcdelivery.com.pk/pk/">Download  Now</a></button>
                    </div>
                </div>
            </div >
            <div className='card-container'>
                <div className="card" >
                    <img src="./images/menu.png" width="100%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Our Menu</strong></h5>
                        <p class="card-text">Our exclusive menu is waiting for you.</p>
                        <button className='btn-order'><a href="https://mcdonalds.com.pk/full-menu/">Order Now</a></button>
                    </div>
                </div>
                <div className="card" >
                    <img src="./images/trending.png" width="100%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Trending Now </strong></h5>
                        <p class="card-text">Find out what's new.</p>
                        <button className='btn-order-2'><a href="https://mcdonalds.com.pk/trending-now/">Learn More</a></button>
                    </div>
                </div>
                <div className="card" >
                    <img src="./images/career.png" width="100%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Careers</strong></h5>
                        <p class="card-text">Be a part of our team.</p>
                        <button className='btn-order'><a href="https://mcdonalds.com.pk/careers">Apply Now</a></button>
                    </div>
                </div>
            </div >
        </div >
    )
}



