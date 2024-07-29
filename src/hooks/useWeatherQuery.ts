import axios from "axios";
import axiosInstance from "../lib/axios";
import { Weather } from "../types/weather";
import { useQuery } from "@tanstack/react-query";

function manageLocations(locationData: { location: string }) {
  const savedLocations = JSON.parse(localStorage.getItem("locations") || "[]");

  // Verificar si la ubicación ya está en el localStorage
  const isLocationSaved = savedLocations.some(
    (loc: { location: string }) => loc.location === locationData.location
  );

  if (!isLocationSaved) {
    // Limitar el número de ubicaciones a 10
    if (savedLocations.length >= 10) {
      savedLocations.shift(); // Eliminar la primera ubicación
    }
    savedLocations.push(locationData);
    localStorage.setItem("locations", JSON.stringify(savedLocations));
  }
}

function getLastSavedLocation() {
  const savedLocations = JSON.parse(localStorage.getItem("locations") || "[]");
  return savedLocations.length > 0
    ? savedLocations[savedLocations.length - 1]
    : null;
}

async function fetchWeatherData(location: string): Promise<Weather> {
  try {
    const { data } = await axiosInstance.get<Weather>("/forecast.json", {
      params: {
        q: location,
        days: 5,
      },
    });
    const locationData = {
      location: data.location.name + ", " + data.location.country,
    };

    // Llamar a la función para manejar el localStorage
    manageLocations(locationData);

    return data;
  } catch (error) {
    const lastLocation = getLastSavedLocation();

    if (lastLocation) {
      try {
        const { data } = await axiosInstance.get<Weather>("/forecast.json", {
          params: {
            q: lastLocation.location,
            days: 5,
          },
        });

        return data;
      } catch (secondError) {
        if (axios.isAxiosError(secondError)) {
          throw new Error(
            secondError.response?.data?.message || "Error fetching weather data"
          );
        }
        throw secondError;
      }
    }

    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error fetching weather data"
      );
    }
    throw error;
  }
}

export function useWeatherQuery(location: string) {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: () => fetchWeatherData(location),
    refetchInterval: 1000 * 60 * 30, // Refresca cada 30 minutos
    staleTime: 1000 * 60 * 15, // Considera los datos frescos por 15 minutos
  });
}
