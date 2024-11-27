const API_KEY = "";
const BASE_URL = "";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();

  return data.result;
};

export const searhMovies = async (query) => {
  const result = await fetch(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  const data=result.json()
  return data.result
};
