import React from "react";
import Head from "./components/Head";
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import { FaMusic } from "react-icons/fa";
import Movie from "./components/Movie";
import Video from "./components/Video";
import Music from "./components/Music";
import All from "./All";
import Cricate from "./components/Cricate";
import Live from "./components/Live";
import Demo2 from "./components/Demo2";
// import Live from "./components/Live";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "demo",
          element: (
            <>
              <Demo />
              <Demo2 />
            </>
          ),
        },
        {
          path: "all",
          element: <All />,
        },
        {
          path: "music",
          element: <Music />,
        },
        {
          path: "video",
          element: <Video />,
        },
        {
          path: "Live",
          element: <Live />,
        },
        {
          path: "Cricate",
          element: <Cricate />,
        },
        {
          path: "movies",
          element: <Movie />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
