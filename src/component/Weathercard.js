import React from "react";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { CiCloudDrizzle } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";
import { CiDroplet } from "react-icons/ci";


const Whethercard = (props) => {
  return (
    <>
      <div className="flex justify-center bg-green-500 rounded-lg shadow-lg w-[15vw] h-auto">
        <div className="flex flex-col  gap-4 mt-4 mb-10 ">
          <div className="flex flex-col">
            <h1 className="text-2xl text-white text-center">{props.Day}</h1>
            <h1 className="text-xs text-white text-center">{props.Date}</h1>
          </div>
          <div className="flex justify-center">
          <img height={60} width={60} src={props.Image1} alt="Image" />
          </div>

          <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center gap-2">
            <h1 className="py-1">
              <FaTemperatureEmpty className="text-white text-md" />
            </h1>
            <h1 className="text-md text-white ">{props.Temperature}°C</h1>
          </div>

          <div className="flex gap-2 justify-center ">
            <h1 className="py-1">
              <CiCloudDrizzle className="text-white" />
            </h1>
            <h1 className="text-md text-white">{props.Rain} mm</h1>
          </div>

          <div className="flex gap-2 justify-center">
            <h1 className="py-1">
              <FaWind className="text-white" />
            </h1>
            <h1 className="text-md text-white">{props.Speed} Km/H</h1>
          </div>

          <div className="flex gap-2 justify-center">
            <h1 className="py-1">
              <CiDroplet className="text-white" />
            </h1>
            <h1 className="text-md text-white">{props.Dense}%</h1>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whethercard;
