
import data from "../Data/extended_location_data.json"

const Footer = ()=>{
  
    return(
        <div>
            <ul>
        {Object.keys(data).map((state) => (
          <li key={city.index}>
            <h2>{state}</h2>
            
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Footer;