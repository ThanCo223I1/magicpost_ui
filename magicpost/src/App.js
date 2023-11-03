import './App.css';
import Login from "./component/login/Login";
import {Route, Routes} from "react-router";
import PlayOut from "./component/PlayOut";
import Home from "./page/home/Home";
import Register from "./component/login/Register";
import Order from "./page/home/Order";
import LayoutAdmin from "./component/playout_admin/LayoutAdmin";
import TransantionPointAdmin from "./component/playout_admin/transantionPoint/TransantionPointAdmin";
import ConsolidationPoint from "./component/playout_admin/consolidationPoint/ConsolidationPoint";
import LayoutLeader from "./component/leader/LayoutLeader";
import CreateEmployeeCon from "./component/leader/Consolidation/CreateEmployeeCon";
import CreateEmployeeTran from "./component/leader/Transantion/CreateEmployeeTran";
import TransantionPointManager from "./component/playout_admin/transantionPoint/TransantionPointManager";
import TransantionPointManagerBlock from "./component/playout_admin/transantionPoint/TransantionPointManagerBlock";
import ConsolidationPointManager from "./component/playout_admin/consolidationPoint/ConsolidationPointManager";
import ConsolidationPointManagerBlock
    from "./component/playout_admin/consolidationPoint/ConsolidationPointManagerBlock";

import OrderReceived from "./component/consolidationPoint/employee/OrderReceived";
import OrderShipping from "./component/consolidationPoint/employee/OrderShipping";
import OrderPending from "./component/transactionPoint/employee/OrderPending";
import OrderShipping_TransactionPoint from "./component/transactionPoint/employee/OrderShipping_TransactionPoint";

function App() {
    const account = JSON.parse(localStorage.getItem("account"))

    return (
        <>
            <Routes>
                <Route path={'/'} element={<PlayOut/>}>
                    <Route path={''} element={<Home/>}></Route>
                    <Route path={'/login'} element={<Login/>}></Route>
                    {/*<Route path={"/register"} element={<Register/>}></Route>*/}
                </Route>
                {account && <Route>
                    <Route path={"order"} element={<Order/>}></Route>
                    <Route path={'admin'} element={<LayoutAdmin/>}>
                        <Route path={"tran"} element={<TransantionPointAdmin/>}></Route>
                        <Route path={"managerTran"} element={<TransantionPointManager/>}></Route>
                        <Route path={"managerCon"} element={<ConsolidationPointManager/>}></Route>
                        <Route path={"managerTran/block"} element={<TransantionPointManagerBlock/>}></Route>
                        <Route path={"managerCon/block"} element={<ConsolidationPointManagerBlock/>}></Route>
                        <Route path={"con"} element={<ConsolidationPoint/>}></Route>
                    </Route>
                </Route>}
                {account && <Route>
                    <Route path={'leader'} element={<LayoutLeader/>}>
                        <Route path={'employeeCon'} element={<CreateEmployeeCon></CreateEmployeeCon>}></Route>
                        <Route path={'employeeTran'} element={<CreateEmployeeTran></CreateEmployeeTran>}></Route>
                    </Route>
                    <Route path={'employee'} element={<Order></Order>}>
                        <Route path={'consolidationPoint/orderReceived/:id'} element={<OrderReceived/>}></Route>
                        <Route path={'consolidationPoint/orderShipping/:id'} element={<OrderShipping/>}></Route>
                        <Route path={'transactionPoint/orderPending/:id'} element={<OrderPending/>}></Route>
                        <Route path={'transactionPoint/orderShipping/:id'}
                               element={<OrderShipping_TransactionPoint/>}></Route>
                    </Route>
                </Route>}
            </Routes>
        </>
    );

}

export default App;
