import axios from "axios";
import axiosInstance from "../lib/axios";
import { Weather } from "../types/weather";
import { useQuery } from "@tanstack/react-query";

async function fetchWeatherData(): Promise<Weather> {
  try {
    const response = await axiosInstance.get<Weather>("/forecast.json", {
      params: {
        q: "Nueva Imperial, Chile",
        days: 3,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error fetching weather data"
      );
    }
    throw error;
  }
}

export function useWeatherQuery() {
  return useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeatherData,
    refetchInterval: 1000 * 60 * 30, // Refresca cada 30 minutos
    staleTime: 1000 * 60 * 15, // Considera los datos frescos por 15 minutos
  });
}
