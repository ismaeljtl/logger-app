// import { IMovieDetails } from "../interfaces/MovieDetails.interface";
// import { INowPlayingMovie } from "../interfaces/NowPlayingMovies.interface";

export interface IMovieDetailsResponse {
  isOk: boolean;
  data: any | null;
  error: string | null;
}

export const getSchedules = async (): Promise<any> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL)
      return {
        isOk: false,
        data: undefined,
        error: "API URL or API Key not configured.",
      };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedules`);
    const data = await res.json();
    return {
      isOk: true,
      data: data,
      error: undefined,
    };
  } catch (error) {
    return {
      isOk: false,
      data: undefined,
      error:
        "There has been an error when trying to get the data. Please, try again.",
    };
  }
};

export const getScheduleLogs = async (): Promise<any> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL)
      return {
        isOk: false,
        data: undefined,
        error: "API URL or API Key not configured.",
      };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scheduleLogs`);
    const data = await res.json();
    return {
      isOk: true,
      data: data,
      error: undefined,
    };
  } catch (error) {
    return {
      isOk: false,
      data: undefined,
      error:
        "There has been an error when trying to get the data. Please, try again.",
    };
  }
};
