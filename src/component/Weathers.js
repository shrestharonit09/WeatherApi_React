import React, { useState, useEffect } from "react";

import Weatherscards from "./Weatherscards";

const Weathers = () => {
  const [data, setData] = useState([]);
  const[city,setCity]=useState();
  let URL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=27.6710&lon=85.4298&appid=85ddfa36b52f28b28ec40b04ceae1b7b";
  const datafetchgaram = async () => {
    try {
      const response = await fetch(URL);
      const datafromurl = await response.json();
      // Get the current time
      const currentTime = new Date();
      // Iterate over each day's data to find the item closest to the current time for that day
      const closestItems = datafromurl.list.reduce((acc, curr) => {
        const currDate = new Date(curr.dt_txt);
        const diffTime = Math.abs(currDate - currentTime);
        const day = currDate.getDate();
        if (!acc[day] || diffTime < Math.abs(new Date(acc[day].dt_txt) - currentTime)) {
          acc[day] = curr;
        }
        return acc;
      }, {});
      // Set the closest items as the data
      setData(Object.values(closestItems));
      setCity(datafromurl.city)
    } catch (error) {}
  };
  useEffect(() => {
    datafetchgaram();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-6 gap-4">
        {data.map((item) => (
          <Weatherscards 
          key={item.dt}
          Datetime={item.dt_txt.slice(0,10)} 
          Icons={item.weather[0].icon} 
          Maxtemp={item.main.temp_min}
          Mintemp={item.main.temp_max}
          Mm={item.rain && item.rain["3h"]}
          Speed={item.wind.speed}
          Humidity={item.main.humidity}
          City={city.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Weathers;