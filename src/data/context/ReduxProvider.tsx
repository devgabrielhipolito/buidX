import { Provider } from "react-redux";
import { store, persistor } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
interface ComponentType {
  children: React.ReactNode;
}

export const ReduxProvider: React.FC<ComponentType> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
