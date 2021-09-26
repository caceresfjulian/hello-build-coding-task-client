import Router from "./Router";
import "./App.css";
import {AuthContextProvider} from './Context';
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
