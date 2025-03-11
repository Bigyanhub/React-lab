import { useEffect, useState } from "react";
import Axios from "axios";
import Map from "./components/Map";
import "./App.css";

const App = () => {
  // Setting up state variables
  const [ipDetails, setIpDetails] = useState({});
  const [lat, setLat] = useState(22.5726); // Default: Kolkata
  const [lon, setLon] = useState(88.3832);

  // Fetching IP and location details
  useEffect(() => {
    Axios.get("https://ipapi.co/json/")
      .then((res) => {
        setIpDetails(res.data);
        setLat(res.data.latitude);
        setLon(res.data.longitude);
      })
      .catch((err) => console.error("Error fetching IP details:", err));
  }, []);

  return (
    <>
      <h1 className=" font-[Pacifico,_cursive] text-6xl text-center underline text-blue-700   ">
        IP Address Finder
      </h1>
      <div className="h-70vh flex items-center justify-center">
        <div className=" box-border pl-20 w-40%">
          <h4>What is my IPv4 address?</h4>
          <h1 className="text-blue-700">{ipDetails.ip || "Fetching..."}</h1>

          <h4>Approximate location:</h4>
          <p className="text-lg t-b-7">
            {ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}
          </p>
          <h4>Internet Service Provider (ISP):</h4>
          <p className="text-lg text-blue-700">{ipDetails.org}</p>
        </div>

        {/* Pass latitude & longitude to Map component */}
        <Map lat={lat} lon={lon} />
      </div>
    </>
  );
};

export default App;
