import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer"
import CardRinghtSide from "../components/CardRightSide"



export default function MainLayout(){
     return(
          <>
<AppNavbar/>
<div className="grid grid-col-12">
     <div className="col-span-8">
          <Outlet/>
     </div>
     <div className="col-span-4">
          <CardRinghtSide/>
     </div>

</div>
<Footer/>
          </>
     )
}