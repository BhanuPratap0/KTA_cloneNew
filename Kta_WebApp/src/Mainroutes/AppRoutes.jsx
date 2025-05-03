import AboutPage from "@/Pages/AboutPage/AboutPage";
import CareersPage from "@/Pages/CareersPage/CareersPage";
import CalculatorPage from "@/Pages/CalculatorPage/CalculatorPage";

import Products from "@/Pages/Products/Products";
import Downloads from "@/Pages/DownloadPage/Downloads";

export const appRoutes = [
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "products",
    element:<Products/>
  },
  {
    path: "careers",
    element: <CareersPage/>
  },
  {
    path: "Calculator",
    element: <CalculatorPage />,
  },
  {
    path: "Downloads",
    element: <Downloads />,
  },
];
