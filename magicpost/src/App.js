import './App.css';
import Login from "./component/login/Login";
import {Route, Routes} from "react-router";
import PlayOut from "./component/PlayOut";
import Home from "./page/Home";
import Register from "./component/login/Register";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<PlayOut/>}>
                <Route path={'/login'} element={<Login/>}></Route>
                <Route path={"register"} element={<Register/>}></Route>
                <Route path={''} element={<Home/>}></Route>
            </Route>
        </Routes>
    </>
  );
}

export default App;
