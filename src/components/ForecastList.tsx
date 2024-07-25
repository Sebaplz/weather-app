import React from "react";
import { Weather } from "../types/weather";
import ChangeTemp from "./ChangeTemp";

interface ForecastListProps {
  data: Weather;
}

const ForecastList: React.FC<ForecastListProps> = ({ data }) => {
  return (
    <section id="forecast-list" className="flex flex-col py-16 lg:py-8">
      <ChangeTemp />
      <div className="flex flex-wrap gap-8 md:gap-6 lg:gap-10 justify-center">
        {data.forecast.forecastday.map((forescastday, index) => (
          <article
            key={index}
            className="w-32 h-44 current-weather-color flex flex-col gap-6 justify-center items-center"
          >
            <p>{forescastday.date.toString()}</p>
            <img
              src={forescastday.day.condition.icon}
              alt="weather icon"
              className="w-14 h-14"
            />
            <div className="flex gap-4">
              <p>{forescastday.day.maxtemp_c}°C</p>
              <p className="text-secondary">{forescastday.day.mintemp_c}°C</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ForecastList;
