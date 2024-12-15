import { useSelector } from "react-redux";
import { rootState } from "./data/redux/reducers";
import { ControllerRoutes } from "./routes/ControllerRoutes";
import "./index.css";
import { TableProvider } from "./data/context/Tableprovider";
function App() {
  return (
    <>
      <TableProvider>
        <ControllerRoutes />; 
      </TableProvider>
    </>
  );
}

export default App;
