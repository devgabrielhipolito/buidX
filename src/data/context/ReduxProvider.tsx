import { Provider } from "react-redux";
import store from "../redux/store/store";

interface ComponentType {
  children: React.ReactNode;
}

export const ReduxProvider: React.FC<ComponentType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
