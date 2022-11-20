import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import Header from "../../Pages/Shared/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div className="w-[90%] mx-auto mb-20">
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content justify-center">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard" className="font-bold hover:bg-black hover:text-secondary">
                My Appointments
              </Link>
            </li>

            {isAdmin && (
              <>
                {" "}
                <li>
                  <Link
                    to="/dashboard/allUsers"
                    className="font-bold hover:bg-black hover:text-secondary"
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/addDoctors"
                    className="font-bold hover:bg-black hover:text-secondary"
                  >
                    Add Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageDoctors"
                    className="font-bold hover:bg-black hover:text-secondary"
                  >
                    Manage Doctor
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
