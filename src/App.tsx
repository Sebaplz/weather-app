import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import { useWeatherQuery } from "./hooks/useWeatherQuery";
import { Loading } from "./utils/Loading";

export default function Home() {
  const [location, setLocation] = useState("Nueva Imperial, Chile");
  const { data, error, isLoading } = useWeatherQuery(location);
  const [isClose, setIsClose] = useState(true);
  const [inTransition, setInTransition] = useState(false);

  const handleToggle = () => {
    setInTransition(true);
    setIsClose(!isClose);
  };

  console.log(error?.message);

  return (
    <main className="flex min-h-screen flex-col lg:flex-row xl:max-w-screen-2xl xl:items-center xl:justify-center mx-auto">
      <div
        className={`relative min-h-screen w-full max-w-[425px] md:mx-auto xl:mx-0 ${
          inTransition ? "overflow-hidden" : ""
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-100 ${
            isClose ? "fade-slide-exit-active" : "fade-slide-enter-active"
          }`}
          style={{ zIndex: isClose ? 0 : 1 }}
        >
          <SearchBar setIsClose={handleToggle} setLocation={setLocation} />
        </div>
        <div
          className={`absolute inset-0 transition-all duration-100 ${
            isClose ? "fade-slide-enter-active" : "fade-slide-exit-active"
          }`}
          style={{ zIndex: isClose ? 1 : 0 }}
        >
          {isLoading ? (
            <Loading />
          ) : data ? (
            <CurrentWeather
              data={data}
              setIsClose={handleToggle}
              setLocation={setLocation}
            />
          ) : null}
        </div>
      </div>
      {data && (
        <div className="lg:px-10 xl:px-20 min-h-screen flex flex-col justify-center">
          <ForecastList data={data} />
          <WeatherDetails data={data} />
        </div>
      )}
    </main>
  );
}
