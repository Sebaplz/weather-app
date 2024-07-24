import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import WeatherDetails from "./components/WeatherDetails";
import { useWeatherQuery } from "./hooks/useWeatherQuery";
import { Loading } from "./utils/Loading";

export default function Home() {
  const { data, isLoading, isError, error } = useWeatherQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main className="flex min-h-screen flex-col lg:flex-row xl:max-w-screen-2xl xl:items-center mx-auto">
      {/* <SearchBar /> */}
      {data && <CurrentWeather data={data} />}
      <div className="lg:px-10">
        <ForecastList />
        <WeatherDetails />
      </div>
    </main>
  );
}
