import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detail/:id?" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
