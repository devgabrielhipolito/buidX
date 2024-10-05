import { useSelector } from "react-redux";
import { rootState } from "./data/redux/reducers";
import { ControllerRoutes } from "./routes/ControllerRoutes";
import "./index.css";
function App() {
  return (
    <>
      
      <ControllerRoutes />
    </>
  );
}

export default App;
