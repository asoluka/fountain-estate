import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, Home, NotFound, ProjectDetailsPage } from "../components";
import ScheduleInspectionPage from "../components/pages/ScheduleInspectionPage";

const AppRoutes = () => {
  return (
    <div className="w-full flex flex-1 flex-col">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route
          exact
          path="/schedule-inspection"
          element={<ScheduleInspectionPage />}
        />
        <Route path="projects/:name" element={<ProjectDetailsPage />}>
          {/* <Route element={<AnalyticsTabs />} path=":tab" /> */}
        </Route>
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
