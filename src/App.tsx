import {
  RouterProvider,
} from "react-router-dom";
import router from './config/routes.config';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
