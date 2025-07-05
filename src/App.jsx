import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import { lazy, Suspense, useEffect, useState, useContext } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./context/UserContext";

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser);

  async function fetchUserName() {
    try {
      // Dummy API call
      // const data = await fetch('fetchuserNameApi')
      const data = {
        name: "Akshith Gunasheelan",
      };
      setUserName(data?.name);
    } catch (err) {}
  }
  useEffect(() => {
    fetchUserName();
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
      <>
        <Header />
        <Outlet />{" "}
        {/*  This will be replaced by the children of the AppLayout based on the path*/}
      </>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // Dynamic path for the restaurants
        element: <RestaurantMenuPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
