import React from "react";
import { Weather } from "../types/weather";

interface CurrentWeatherProps {
  data: Weather;
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  data,
  setIsClose,
  setLocation,
}) => {
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude},${longitude}`);
        },
        (err) => {
          console.error("Error getting user location:", err.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <section
      id="current-weather"
      className="text-white p-4 min-h-screen current-weather-color w-full flex flex-col items-center justify-center relative overflow-hidden max-w-[425px] md:mx-auto xl:mx-0"
    >
      <div className="flex justify-between w-full absolute top-4 px-4 z-10">
        <button
          onClick={() => setIsClose(true)}
          className="text-sm w-40 h-10 bg-[#6E707A]"
        >
          Search for places
        </button>
        <button
          onClick={() => handleLocation()}
          className="w-10 h-10 bg-[#6E707A] rounded-full flex justify-center items-center"
        >
          <img src="icons/my_location.svg" alt="my_location icon" />
        </button>
      </div>
      <div className="absolute top-14 w-[563px] h-[326px] z-0 ">
        <img
          src="icons/Cloud-background.png"
          alt="cloud background image"
          className="w-full h-full opacity-10"
        />
      </div>
      <article className="relative z-10">
        <div className="flex justify-center">
          <img
            src={data.current.condition.icon}
            alt={data.current.condition.text}
            className="w-40 h-44"
          />
        </div>
        <h2 className="text-[144px] font-medium">
          {data.current.temp_c}
          <span className="text-5xl text-secondary">°C</span>
        </h2>
        <div className="flex flex-col gap-6 items-center">
          <h3 className="text-3xl font-semibold text-secondary">
            {data.current.condition.text}
          </h3>
          <div className="flex gap-4 text-[18px] text-secondary font-medium">
            <p>Today</p>
            <p>•</p>
            <p>Fri, 5 Jun</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="icons/location.svg" alt="location icon" />
            <p className="text-[18px] text-secondary font-semibold">
              {data.location.name}, {data.location.country}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CurrentWeather;
