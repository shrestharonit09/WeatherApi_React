import React, { useState, useEffect } from "react";
import Weatherscards from "./Weatherscards";

const latitude = [27.671, 27.6588,27.7172, 27.484, 28.2096, 26.7288];
const longitude = [85.4298,85.3247, 85.3240, 83.276, 83.9856, 85.9259];

const Weather = () => {
  const [data, setData] = useState([]);


  const datafetchgaram = async () => {
    try {
      const weatherDataPromises = latitude.map(async (lat, index) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${longitude[index]}&appid=85ddfa36b52f28b28ec40b04ceae1b7b`
        );
        const datafromurl = await response.json();
        return { list: datafromurl.list, city: datafromurl.city };
      });
      console.log(weatherDataPromises)

      const weatherDataArray = await Promise.all(weatherDataPromises);

      const currentTime = new Date();

      const closestItems = weatherDataArray.map((weatherData) => {
        const closestItem = weatherData.list.reduce((prev, curr) => {
          const prevTimeDiff = Math.abs(new Date(prev.dt_txt) - currentTime);
          const currTimeDiff = Math.abs(new Date(curr.dt_txt) - currentTime);
          return prevTimeDiff < currTimeDiff ? prev : curr;
        });
        return { ...closestItem, city: weatherData.city.name };
      });

      setData(closestItems);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    datafetchgaram();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-6 w-[95vw] gap-5">
        {data.map((item) => (
          <Weatherscards
            key={item.dt}
            Datetime={item.dt_txt.slice(0,10)}
            Icons={item.weather[0].icon}
            Maxtemp={item.main.temp_max}
            Mintemp={item.main.temp_min}
            Mm={item.rain && item.rain["3h"]}
            Speed={item.wind.speed}
            Humidity={item.main.humidity}
            City={item.city}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
