import AboutPage from "@/Pages/AboutPage/AboutPage";
import CalculatorPage from "@/Pages/CalculatorPage/CalculatorPage";
import Products from "@/Pages/Products/Products";

export const appRoutes = [
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "Calculator",
    element: <CalculatorPage />,
  },
];
