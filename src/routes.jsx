import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

export default [
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];
