import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "../index";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
const Main = lazy(() => import("../Pages/Main/Main")),
  Home = lazy(() => import("../Pages/Home/Home")),
  Auth = lazy(() => import("../Pages/Auth/Auth")),
  RequierAuth = lazy(() => import("../../Auth/RequierAuth")),
  E404 = lazy(() => import("../Components/E404/E404")),
  RequierBack = lazy(() => import("../../Auth/RequierBack")),
  GoogleCallBack = lazy(() =>
    import("../Pages/Auth/GoogleCallBack/GoogleCallBack")
  ),
  Information = lazy(() => import("../Pages/Information/Information"));
const router = createBrowserRouter([
  {
    path: "google/callback",
    element: <GoogleCallBack />,
  },
  {
    element: <RequierBack />,
    children: [
      {
        index: true,
        path: "login",
        element: <Auth />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <E404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: "loading",
        element: <Loading />,
      },
      {
        element: <RequierAuth />,
        children: [
          {
            path: "information",
            element: <Information />,
          },
        ],
      },
    ],
  },
]);
export default function AppRouter() {
  const { value } = useSelector((state) => state.mode)
  const darkTheme = createTheme({
    palette: {
      mode: value,
      ...(value === 'light'
        ?{
          background:
          {
            paper: "#e1e1e1",
            default: "#e1e1e1"
          },
          primary:{
            main: '#fff',
            light: 'hsl(210, 26%, 11%)',
            contrastText: '#000',
            title: '#000' ,
            secondy: 'hsl(210, 26%, 11%, 0.5)'
          } ,

        }
        :{
          background: {
            paper: "hsl(210, 26%, 11%)",
            default: "hsl(210, 26%, 11%)"
          },
          primary:{
            main: 'hsl(210, 26%, 11%)',
            light: 'hsl(210, 26%, 11%)',
            contrastText: 'hsl(214, 15%, 62%)',
            title: '#fff' ,
            secondy: "hsl(0, 0%, 100%, 0.1)"
          } ,

        }
      ),
    },
  });
  return (
    <>
    <ThemeProvider theme={darkTheme}>

      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>

    </ThemeProvider>
    </>
  );
}
