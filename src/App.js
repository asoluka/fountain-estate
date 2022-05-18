import AppRoutes from "./route";
import { BrowserRouter } from "react-router-dom";
import { InstantMessageFloatingAction } from "./components";
import CallFloatingAction from "./components/molecules/CallFloatingAction";

function App() {
  return (
    <BrowserRouter>
      <CallFloatingAction />
      <InstantMessageFloatingAction />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
