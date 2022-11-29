import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appoinnment/Appointment/Appointment";
import AddDoctors from "../Pages/Dashboard/AddDoctors";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";
import MyDashboard from "../Pages/Dashboard/MyDashboard";
import Payment from "../Pages/Dashboard/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivetRoute";
const { createBrowserRouter } = require("react-router-dom");
// const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyDashboard></MyDashboard>,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addDoctors",
        element: (
          <AdminRoute>
            <AddDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageDoctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoute>
            <Payment />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://doctors-portal-server-eosin-beta.vercel.app/bookings/${params.id}`),
      },
    ],
  },
]);
export default router;
