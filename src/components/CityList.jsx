import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

const CityList = ({ data }) => {
  const { stateName } = useParams();
  const cities = data[stateName] || [];

  // Calculate number of rows needed (4 cities per row)
  const rowCount = Math.ceil(cities.length / 4);

  return (
    <div className="city-table-container">
      <div className="button-wrapper">
        <Footer />
      </div>
      

     <div className="content-wrapper">
     <h2>Cities in {stateName}</h2>
      <table className="city-table table table-striped">
        <tbody>
          {Array.from({ length: rowCount }).map((_, rowIndex) => {
            const startIdx = rowIndex * 4;
            const rowCities = cities.slice(startIdx, startIdx + 4);

            return (
              <tr key={rowIndex} className="table-width">
                {rowCities.map((city) => (
                 
                  <td key={city.id} className="city-cell">
                    <Link to={`/state/${stateName}/${city.name}`} className="city-name">{city.name}</Link>
                  </td>
                 
                ))}
                {/* Fill empty cells if needed */}
                {/* {Array.from({ length: 4 - rowCities.length }).map((_, i) => (
                  <td key={`empty-${i}`} className="empty-cell"></td>
                ))} */}
       
              </tr>
            );
          })}
        </tbody>
      </table>
</div>
      {/* <Link to="/" className="back-link">← Back to States</Link> */}
    </div>
  );
};

export default CityList;
