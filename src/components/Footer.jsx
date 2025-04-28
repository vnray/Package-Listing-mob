import { Link } from "react-router-dom";
import data from "../Data/extended_location_data.json";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* {Object.keys(data).map((stateName) => (
        <div key={stateName}>
          <h2>{stateName}</h2>
        </div>
      ))} */}

      <div className="alphbed-numbers-list">
        <div className="left-area-lable">
          <span>States</span>
        </div>
        <div className="right-area-lable">
          <ul className="">
            {Object.keys(data).map((stateName) => (
              <li key={stateName}>
                <Link to={`/state/${stateName}`} statename={stateName}>{stateName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
