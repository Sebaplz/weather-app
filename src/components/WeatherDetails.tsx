import React from "react";

const WeatherDetails: React.FC = () => {
  return (
    <section id="weather-details" className="flex flex-col p-4 xl:px-0 gap-4">
      <h2 className="text-2xl font-bold">Today&apos;s Hightlights</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="current-weather-color gap-4 flex flex-col py-4 items-center">
          <h3 className="text-base">Wind status</h3>
          <p className="text-6xl font-bold">
            7<span className="text-4xl font-medium">mph</span>
          </p>
          <p className="text-sm">WSW</p>
        </div>
        <div className="current-weather-color gap-4 flex flex-col py-4 items-center">
          <h3 className="text-base">Humidity</h3>
          <p className="text-6xl font-bold">
            58<span className="text-4xl font-medium">%</span>
          </p>
        </div>
        <div className="current-weather-color gap-4 flex flex-col py-4 items-center">
          <h3 className="text-base">Visibility</h3>
          <p className="text-6xl font-bold">
            6,4 <span className="text-4xl font-medium">miles</span>
          </p>
        </div>
        <div className="current-weather-color gap-4 flex flex-col py-4 items-center">
          <h3 className="text-base">Air Pressure</h3>
          <p className="text-6xl font-bold">
            998 <span className="text-4xl font-medium">mb</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
