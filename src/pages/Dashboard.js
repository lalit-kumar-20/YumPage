import { Suspense } from "react";
import Footer from "../components/layout/Footer";
import  Navbar  from "../components/layout/Navbar";
import  Topbar  from "../components/TopbarAdmin/index";
import Screen from '../app/basic-elements/page'

const Dashboard = () => {
  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>

      <Suspense>
        <Navbar />
        <Screen/>
      </Suspense>

      {/* <Suspense fallback={<Preloader />}>{children}</Suspense> */}

      <Suspense>
        <Footer hideLinks />
      </Suspense>
    </Suspense>
  );
};

export default Dashboard;
