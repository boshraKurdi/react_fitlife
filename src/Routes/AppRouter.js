import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "../Website/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
// route dashboard
import MainDashboard from "../Dashboard/components/main/MainDashboard";
import Dashboard from "../Dashboard/pages/dashboard";
import UserIndex from "../Dashboard/data/UserIndex";
import Bar from "../Dashboard/pages/bar";
import PlanForm from "../Dashboard/pages/form/PlanForm";
import Line from "../Dashboard/pages/line";
import Pie from "../Dashboard/pages/pie";
import FAQ from "../Dashboard/pages/faq";
import Geography from "../Dashboard/pages/geography";
import Calendar from "../Dashboard/pages/calendar/calendar";
import GoalIndex from "../Dashboard/data/GoalIndex";
import E404 from "../Website/Components/E404/E404";
import PlanIndex from "../Dashboard/data/PlanIndex";
import ExerciseIndex from "../Dashboard/data/ExerciseIndex";
import GoalForm from "../Dashboard/pages/form/GoalForm";
import DetailsPlan from "../Dashboard/pages/details/DetailsPlan";
import DetailsGoal from "../Dashboard/pages/details/DetailsGoal";
// route website
// import RequierBack from "../Website/index";
const regex = /^[0-9]+$/;
const Main = lazy(() => import("../Website/Pages/Main/Main")),
  Home = lazy(() => import("../Website/Pages/Home/Home")),
  Auth = lazy(() => import("../Website/Pages/Auth/Auth")),
  RequierAuth = lazy(() => import("../Auth/RequierAuth")),
  DashBoard = lazy(() => import("../Website/Pages/DashBaord/DashBaord")),
  GoogleCallBack = lazy(() =>
    import("../Website/Pages/Auth/GoogleCallBack/GoogleCallBack")
  ),
  Information = lazy(() => import("../Website/Pages/Information/Information")) ,
  GoalDetails = lazy(() => import("../Website/Pages/GoalDetails/GoalDetails")) ,
  GymDetails = lazy(()=> import('../Website/Pages/GymDetails/GymDetails')),
  Services = lazy(()=> import('../Website/Pages/Services/Services')),
  Payment = lazy(()=> import('../Website/Pages/Payment/Payment')),
  Gym = lazy(()=> import('../Website/Pages/Gym/Gym')),
  Chat = lazy(()=> import('../Website/Pages/Chat/Chat'));
const router = createBrowserRouter([
  {
    path: "google/callback",
    element: <GoogleCallBack />,
  },
  {
  path: '/dashboard' ,
        element:  <MainDashboard /> ,
        children:[
          {
            index:true ,
            element : <Dashboard />
          },
          {
            path: 'user' ,
            element: <UserIndex />
          },
          {
            path: 'goal' ,
            element: <GoalIndex />,
          },
          {
            path: 'goal/plan/:id',
            element: <PlanIndex />
          },
          {
            path: 'goal/plan/:id/exercises/:id',
            element: <ExerciseIndex />
          },
          
          {
            path: 'PlanForm' ,
            element: <PlanForm />
          },
          {
            path: 'GoalForm' ,
            element: <GoalForm />
          },
          {
            path: 'DetailsPlan/:id' ,
            element: <DetailsPlan />
          },
          {
            path: 'DetailsGoal/:id' ,
            element: <DetailsGoal />
          },
          {
            path: 'bar' ,
            element: <Bar />
          },
          {
            path: 'pie' ,
            element: <Pie />
          },
          {
            path: 'line' ,
            element: <Line />
          },
          {
            path: 'faq' ,
            element: <FAQ />
          },
          {
            path: 'calendar' ,
            element: <Calendar />
          },
          {
            path: 'geography' ,
            element: <Geography />
          },
        ]
  },
  {
    path: '/services/chat/:id',
    element:  <Suspense fallback={<Loading />}><Chat /></Suspense>,
    loader : ({params}) =>{
      if (!regex.test(params.id)) {
        throw new Response("bad request" , {
          statusText: "chat not found" ,
          status: 400
        })
      }
      return true;
    }
  },
  {
    path: "/",
    element:  <Suspense fallback={<Loading />}><Main /></Suspense>,
    errorElement: <E404 />,
    children: [
      {
        index: true,
        element:  <Suspense fallback={<Loading />}><Home /></Suspense>,
      },
      // {
      //   element:  <Suspense fallback={<Loading />}><RequierBack /></Suspense>,
      //   children: [
          {
            index: true,
            path: "login",
            element:  <Suspense fallback={<Loading />}><Auth /></Suspense>,
          },
      //   ],
      // },
      {
          path: 'goalDetails/:id',
          element: <Suspense fallback={<Loading />}><GoalDetails /></Suspense>,
          loader : ({params}) =>{
            if (!regex.test(params.id)) {
              throw new Response("bad request" , {
                statusText: "goal not found" ,
                status: 400
              })
            }
            return true;
          }
      },
      {
        element:  <Suspense fallback={<Loading />}><RequierAuth /></Suspense>,
        children: [
          {
            path: "user",
            element:  <Suspense fallback={<Loading />}><DashBoard /></Suspense>,
           
          },
          {
            path: "gym",
            element:  <Suspense fallback={<Loading />}><Gym /></Suspense>,
           
          },
          {
            path: 'services',
            element:  <Suspense fallback={<Loading />}><Services /></Suspense>,
          },
          {
            path: 'services/payment',
            element:  <Suspense fallback={<Loading />}><Payment /></Suspense>,
          },
          {
            path: 'gymDetails/:id' ,
            element: <Suspense fallback={<Loading />}><GymDetails /></Suspense>,
            loader : ({params}) =>{
              if (!regex.test(params.id)) {
                throw new Response("bad request" , {
                  statusText: "gym not found" ,
                  status: 400
                })
              }
              return true;
            }
          },
          {
            path: "information",
            element:  <Suspense fallback={<Loading />}><Information /></Suspense>,
          },
        ],
      },
    ],
  },
]);
export default function AppRouter() {
  const { value } = useSelector((state) => state.mode);
  const darkTheme = createTheme({
    palette: {
      mode: value,
      ...(value === "light"
        ? {
            background: {
              paper: "#e1e1e1",
              default: "#e1e1e1",
            },
            primary: {
              bg: "#e1e1e1",
              main: "#fff",
              light: "hsl(210, 26%, 11%)",
              contrastText: "#000",
              title: "#000",
              secondy: "hsl(210, 26%, 11%, 0.5)",
              thred: "hsl(294.74deg 16.89% 62.04%)"
            },
          }
        : {
            background: {
              paper: "hsl(210, 26%, 11%)",
              default: "hsl(210, 26%, 11%)",
            },
            primary: {
              bg:"hsl(210, 26%, 11%)",
              main: "hsl(210, 26%, 11%)",
              light: "hsl(210, 26%, 11%)",
              contrastText: "hsl(214, 15%, 62%)",
              title: "#fff",
              secondy: "hsl(0, 0%, 100%, 0.1)",
              thred: "hsl(294.74deg 16.89% 62.04%)"
            },
          }),
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}