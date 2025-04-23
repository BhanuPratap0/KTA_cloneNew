import AboutPage from "@/Pages/AboutPage/AboutPage";
import CareersPage from "@/Pages/CareersPage/CareersPage";
import Products from "@/Pages/Products/Products";

export const appRoutes = [
  {
    path: "about",
    element: <AboutPage />,
  },{
    path: "products",
    element:<Products/>
  },
  {
    path: "careers",
    element: <CareersPage/>
  }

];
