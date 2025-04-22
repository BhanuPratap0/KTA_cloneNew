import AboutPage from "@/Pages/AboutPage/AboutPage";
import Products from "@/Pages/Products/Products";

export const appRoutes = [
  {
    path: "about",
    element: <AboutPage />,
  },{
    path: "products",
    element:<Products/>
  }

];
