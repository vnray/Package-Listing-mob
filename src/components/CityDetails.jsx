import { useParams } from "react-router-dom";
import PackageCard from "./PackageCard";

const CityDetail = ({data})=>{
    const { stateName, cityName  } = useParams();
    const cities = data[stateName] || [];
    const city = cities.find(c => c.name  === cityName );
    {console.log(city)}
    if (!city) {
      return <div>City not found</div>;
    }
    
    return (
      <div className="city-detail">
       
        <h2>{city.name}</h2>
        <p>City ID: {city.id}</p>
        <PackageCard/>
        <PackageCard/>
        <PackageCard/>
        <PackageCard/>
        <PackageCard/>
        <PackageCard/>
        <PackageCard/>
      </div>
    );
}

export default CityDetail;