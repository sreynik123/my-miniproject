import { Outlet } from "react-router";
import AppCardRightSide from "../components/AppCardRightSide";
import MyAppNavbar from "../components/MyAppNavbar";
import AppFooter from "../components/AppFooter";

export default function MainLayout() {
  return (
    <>
      <MyAppNavbar />
      <div className="grid grid-col-12">
        <div className="col-span-8">
          <Outlet />
        </div>
        <div className="col-span-4">
          <AppCardRightSide />
        </div>
      </div>
      <AppFooter />
    </>
  );
}
