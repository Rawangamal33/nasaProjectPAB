import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryItems from "./pages/CategoryItems";
import { AnimatePresence } from "framer-motion";
import AnimationRoute from "./Animation/AnimationRoute";
import Experiments from "./pages/Experiments";
import ExprDetails from "./pages/ExprDetails";

const AppSec = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AnimationRoute>
                <Home />
              </AnimationRoute>
            }
          />
          <Route
            path="categoryItems/:categoryName"
            element={
              <AnimationRoute>
                <CategoryItems />
              </AnimationRoute>
            }
          />
          <Route
            path="experiments"
            element={
              <AnimationRoute>
                <Experiments />
              </AnimationRoute>
            }
          />
          <Route
            path="experiments/:id"
            element={
              <AnimationRoute>
                <ExprDetails />
              </AnimationRoute>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppSec;
