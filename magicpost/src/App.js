import './App.css';
import Login from "./component/login/Login";
import {Route, Routes} from "react-router";
import PlayOut from "./component/PlayOut";
import Home from "./page/Home";
import Register from "./component/login/Register";
import OrderReceived from "./component/consolidationPoint/employee/OrderReceived";
import OrderShipping from "./component/consolidationPoint/employee/OrderShipping";
import OrderPending from "./component/transactionPoint/employee/OrderPending";
import OrderShipping_TransactionPoint from "./component/transactionPoint/employee/OrderShipping_TransactionPoint";

function App() {
  return (
    <>
        <Routes>
            <Route path={''} element={<PlayOut/>}>
                <Route path={'login'} element={<Login/>}></Route>
                <Route path={"register"} element={<Register/>}></Route>
                <Route path={''} element={<Home/>}></Route>
                <Route path={'consolidationPoint/orderReceived'} element={<OrderReceived/>}></Route>
                <Route path={'consolidationPoint/orderShipping'} element={<OrderShipping/>}></Route>
                <Route path={'transactionPoint/orderPending/:id'} element={<OrderPending/>}></Route>
                <Route path={'transactionPoint/orderShipping'} element={<OrderShipping_TransactionPoint/>}></Route>
            </Route>
        </Routes>
    </>
  );
}

export default App;
