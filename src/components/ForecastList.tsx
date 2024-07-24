import React from "react";

const ForecastList: React.FC = () => {
  const forecasts = [
    { day: "Tomorrow", temp: "16°C", type: "rain" },
    { day: "Sun, 7 Jun", temp: "16°C", type: "rain" },
    { day: "Mon, 8 Jun", temp: "16°C", type: "rain" },
    { day: "Tue, 9 Jun", temp: "16°C", type: "sunny" },
    { day: "Wed, 10 Jun", temp: "16°C", type: "cloudy" },
  ];

  return (
    <section id="forecast-list" className="flex flex-col py-16 lg:py-8">
      <div className="flex flex-wrap gap-8 md:gap-6 lg:gap-10 justify-center">
        {forecasts.map((forecast, index) => (
          <article
            key={index}
            className="w-32 h-44 current-weather-color flex flex-col gap-6 justify-center items-center"
          >
            <p>{forecast.day}</p>
            <img
              src="/images/Clear.png"
              alt="weather icon"
              className="w-14 h-14"
            />
            <div className="flex gap-4">
              <p>{forecast.temp}</p>
              <p>{forecast.temp}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ForecastList;
