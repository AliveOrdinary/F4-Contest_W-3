import Detail from "./components/Detail/Detail";
import LandingPage from "./components/LandingPage/LandingPage";
const PATHS = {
  LANDING_PAGE: "/",
  MOVIE_DETAIL: "/movies/:imdbID",
};

export const PATHS_MAP = [
  {
    path: PATHS.LANDING_PAGE,
    component: <LandingPage />,
  },
  {
    path: PATHS.MOVIE_DETAIL,
    component: <Detail />,
  },
];
