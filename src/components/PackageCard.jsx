

const PackageCard = ()=>{
    return(

    <div className="card-wrapper">
         <div className="row">
           <div className="col-md-3">
             <img src="https://img.traveltriangle.com/apac/attachments/pictures/891822/original/Old-manali-LINK-1.jpg?tr=w-180,h-200" alt="package-thumbnail" />
           </div>
           <div className="col-md-9">
          <div className="card-title">
          <h3 className="col-md-8">Andaman Tour Package: A Tropical Getaway</h3>
            <div className="compare col-md-4">
                <label htmlFor="">Add To Compare
                </label>
                <input type="checkbox" />
            </div>
          </div>
          <div className="price-wrapper">
            <span className="span-wrapper">
                <span className="start">Starting from:</span><span className="discount">9% OFF</span>
            </span>
            <p className="price">₹ 23,310/- <span className="old-price">₹ 25,615/-</span></p>
            <p className="per-person">Per Person on twin sharing</p>
          </div>
          <div className="hotel-star">
            <p>Hotel included in package: </p>
           <div className="btn-wrapper">
           <div className="star-category">
                <input type="radio" />
                <label htmlFor="">3 Star</label>
            </div>
            <div><button className="btn-book">Book Now</button></div>
           </div>
          </div>
           </div>
        </div>
    </div>

    )
}

export default PackageCard