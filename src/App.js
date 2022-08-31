import AppRoutes from "./route";
import { HashRouter as Router } from "react-router-dom";
import { InstantMessageFloatingAction } from "./components";
import CallFloatingAction from "./components/molecules/CallFloatingAction";

function App() {
  return (
    <Router>
      <CallFloatingAction />
      <InstantMessageFloatingAction />
      <AppRoutes />
    </Router>
  );
}

export default App;
