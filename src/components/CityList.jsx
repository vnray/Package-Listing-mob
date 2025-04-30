import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import himanchal from "../Data/himancha.json"
import PackageCard from "../components/PackageCard"
import { useState } from "react";

const CityList = ({ data }) => {
  const { stateName } = useParams();
  const cities = data[stateName] || [];
  const [openCity, setOpenCity] = useState(null)

 console.log(himanchal.data);

 const handleAccordionToggle = (cityName) => {
  // If clicked city is already open, close it
  if (openCity === cityName) {
    setOpenCity(null);
  } else {
    setOpenCity(cityName);
  }
};

  return (
    <div className="city-table-container">
      <div className="button-wrapper">
        <Footer />
      </div>
     <div className="content-wrapper">
     <h1>Cities in {stateName}</h1>
              <div className="city-wrapper">
                {cities.map((city) => (
                 
                  <div key={city.id} className="city-cell" style={{ maxWidth: openCity === city.name ? "100%" : "48%" }}>
                    
                    <div className="accord" onClick={() => handleAccordionToggle(city.name)}
                          style={{ cursor: "pointer", fontWeight: "bold" }}>
                    <h2>{city.name}</h2>
                    </div>
                    {openCity === city.name && (
                          <div className="accordion-body" style={{ padding: "10px", background: "#f9f9f9",maxWidth:"100%", }}>
                            {/* Example details — you can show actual data */}
                            <div className="tour-packages">
                              <h3>{city.name} Tour Packages</h3>
                              <div>
                              <h4>All {city.name} packages</h4>
                              </div>
                            </div>
                            <div className="family-packages">
                              <h3>{city.name} Family Packages</h3>
                              <div>
                              <h4>All {city.name} packages</h4>
                              </div>
                            </div>
                            <p>Population: {city.population || "N/A"}</p>
                            <p>Famous for: {city.famous_for || "N/A"}</p>

                            {/* Link to city page */}
                            <Link to={`/state/${stateName}/${city.name}`}>Explore Packages</Link>
                          </div>
                        )}
                    
                  </div>
                 
                ))}
       
              </div>
</div>

       
    </div>
  );
};

export default CityList;
