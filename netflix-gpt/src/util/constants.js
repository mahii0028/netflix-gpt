export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";
export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const URL = {
  nowPlayingMovies: "https://api.themoviedb.org/3/movie/now_playing",
  popularMovies: "https://api.themoviedb.org/3/movie/popular?page=1",
  topRatedMovies: "https://api.themoviedb.org/3/movie/top_rated?page=1",
  upComingMovies: "https://api.themoviedb.org/3/movie/upcoming?page=1",
  imageURL: "https://image.tmdb.org/t/p/w500/",
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWQ2MDk1MmE1ZGQ2NTZlNDJjNmFjZDI0YjNkN2RjYyIsIm5iZiI6MTcxMjAzNDg0MS4yNzEwMDAxLCJzdWIiOiI2NjBiOTQxOTE1ZGVhMDAxN2MzNDRiOTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8ZJu-egX3l9i-IIghh48HuDjp91o64ggsajeSwgyu_E",
  },
};

export const SUPPORTED_LANGUAGES = [
  { value: "kannada", name: "Kannad" },
  { value: "en", name: "English" },
  { value: "hindi", name: "Hindi" },
  { value: "telugu", name: "Telugu" },
];

export const OPEN_AI_KEY =
  "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";
