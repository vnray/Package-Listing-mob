import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CityList from "./components/CityList";
import data from "./Data/extended_location_data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CityDetail from "./components/CityDetails";



function App() {
  return (
    <>
      <Router basename="/Package-Listing-mob">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} /> || <Route path="Package-Listing" element={<Home/>}/>
            <Route
              path="/state/:stateName"
              element={<CityList data={data} />}
              />
            
            <Route path="/state/:stateName/:cityName" element={<CityDetail data={data} />} />

          
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
