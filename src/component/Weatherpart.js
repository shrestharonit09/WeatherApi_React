import React, { useState } from 'react';
import Weather from './Weather'; // Assuming Weather component displays single weather data
import Weathers from './Weathers'; // Assuming Weathers component displays multiple weather data

const WeatherPart = () => {
  const [displayComponent, setDisplayComponent] = useState(''); // Initial active component

  const handleClick = (component) => {
    setDisplayComponent(component);
  };

  return (
    <div className=" flex flex-col gap-5 mt-8">
      <div className="flex gap-3 justify-center">
      <button className="rounded-lg bg-gray-300 p-3 text-md text-gray-500 shadow-lg hover:bg-gray-400" onClick={() => handleClick('Weather')}>Weather of 6 Districts</button>
      <button className="rounded-lg bg-gray-300 p-3 text-md text-gray-500 shadow-lg hover:bg-gray-400" onClick={() => handleClick('Weathers')}>Weather of next 5 days</button>
      </div>
      <div>
      {displayComponent === 'Weather' && <Weather />}
      {displayComponent === 'Weathers' && <Weathers />}
      </div>
      
    </div>
  );
};

export default WeatherPart;