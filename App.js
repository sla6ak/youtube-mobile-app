import Routers from "./src/components/Routers";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import ToastConfig from "./src/components/ToastConfig";

export default function App() {
  return (
    <Provider store={store}>
      <Routers />
      <ToastConfig />
    </Provider>
  );
}
