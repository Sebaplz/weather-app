import React from "react";
import { Weather } from "../types/weather";
import Progress from "../utils/Progress";

interface WeatherDetailsProps {
  data: Weather;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data }) => {
  return (
    <section id="weather-details" className="flex flex-col p-4 xl:px-0 gap-4">
      <h2 className="text-2xl font-bold">Today&apos;s Hightlights</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="current-weather-color gap-4 flex flex-col py-4 items-center">
          <h3 className="text-base">Wind status</h3>
          <p className="text-6xl font-bold">
            {data.current.wind_mph}
            <span className="text-4xl font-medium">mph</span>
          </p>
          <p className="text-sm">WSW</p>
        </div>
        <div className="current-weather-color gap-4 flex flex-col py-4 items-center">
          <h3 className="text-base">Humidity</h3>
          <p className="text-6xl font-bold">
            {data.current.humidity}
            <span className="text-4xl font-medium">%</span>
          </p>
          <Progress percentage={data.current.humidity} />
        </div>
        <div className="current-weather-color gap-4 flex flex-col py-4 items-center">
          <h3 className="text-base">Visibility</h3>
          <p className="text-6xl font-bold">
            {data.current.vis_miles}{" "}
            <span className="text-4xl font-medium">miles</span>
          </p>
        </div>
        <div className="current-weather-color gap-4 flex flex-col py-4 items-center">
          <h3 className="text-base">Air Pressure</h3>
          <p className="text-6xl font-bold">
            {data.current.pressure_mb}{" "}
            <span className="text-4xl font-medium">mb</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
