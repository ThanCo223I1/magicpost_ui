import './App.css';
import Login from "./component/login/Login";
import {Route, Routes} from "react-router";
import PlayOut from "./component/PlayOut";
import Home from "./page/home/Home";
import Register from "./component/login/Register";
import Orders from "./page/home/Orders";
import LayoutAdmin from "./component/playout_admin/LayoutAdmin";
import LayOutEmployee from "./page/employee/LayoutEmployee";
import TransantionPointAdmin from "./component/playout_admin/transantionPoint/TransantionPointAdmin";
import ConsolidationPoint from "./component/playout_admin/consolidationPoint/ConsolidationPointAdmin";
import LayoutLeader from "./component/leader/LayoutLeader";
import CreateEmployeeCon from "./component/leader/Consolidation/CreateEmployeeCon";
import CreateEmployeeTran from "./component/leader/Transantion/CreateEmployeeTran";
import TransantionPointManager from "./component/playout_admin/transantionPoint/TransantionPointManager";
import TransantionPointManagerBlock from "./component/playout_admin/transantionPoint/TransantionPointManagerBlock";
import ConsolidationPointManager from "./component/playout_admin/consolidationPoint/ConsolidationPointManager";
import ConsolidationPointManagerBlock
    from "./component/playout_admin/consolidationPoint/ConsolidationPointManagerBlock";

import OrderReceived_ConsolidationPoint from "./component/consolidationPoint/employee/OrderReceived_ConsolidationPoint";
import OrderShipping_ConsolidationPoint from "./component/consolidationPoint/employee/OrderShipping_ConsolidationPoint";
import OrderPending_TransactionPoint from "./component/transactionPoint/employee/OrderPending_TransactionPoint";
import OrderShipping_TransactionPoint from "./component/transactionPoint/employee/OrderShipping_TransactionPoint";
import ConsolidationPointAdmin from "./component/playout_admin/consolidationPoint/ConsolidationPointAdmin";
import ShowEmployeeTransantion from "./component/leader/Transantion/ShowEmployeeTransantion";
import ShowEmployeeTransantionBlock from "./component/leader/Transantion/ShowEmployeeTransantionBlock";
import ShowEmployeeConsolidationtionBlock from "./component/leader/Consolidation/ShowEmployeeConsolidationtionBlock";
import ShowEmployeeConsolidationtion from "./component/leader/Consolidation/ShowEmployeeConsolidationtion";
import Welcome from "./component/Welcome";
import OrderStatistics_ConsolidationPoint_StatusComplete
    from "./component/leader/Consolidation/OrderStatistics_ConsolidationPoint_StatusComplete";
import OrderStatistics_ConsolidationPoint_StatusCancel
    from "./component/leader/Consolidation/OrderStatistics_ConsolidationPoint_StatusCancel";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<PlayOut/>}>
                    <Route path={''} element={<Home/>}></Route>
                    <Route path={'/login'} element={<Login/>}></Route>
                    {/*<Route path={"/register"} element={<Register/>}></Route>*/}
                </Route>
                <Route>
                    {/*<Route path={"order"} element={<Order/>}></Route>*/}
                    <Route path={'admin'} element={<LayoutAdmin/>}>
                        <Route path={"tran"} element={<TransantionPointAdmin/>}></Route>
                        <Route path={"managerTran"} element={<TransantionPointManager/>}></Route>
                        <Route path={"managerCon"} element={<ConsolidationPointManager/>}></Route>
                        <Route path={"managerTran/block"} element={<TransantionPointManagerBlock/>}></Route>
                        <Route path={"managerCon/block"} element={<ConsolidationPointManagerBlock/>}></Route>
                        <Route path={"con"} element={<ConsolidationPointAdmin/>}></Route>
                    </Route>
                </Route>
                <Route>
                    <Route path={'leader'} element={<LayoutLeader/>}>
                        <Route path={'employeeCon'} element={<CreateEmployeeCon></CreateEmployeeCon>}></Route>
                        <Route path={'showEmployeeTran'} element={<ShowEmployeeTransantion></ShowEmployeeTransantion>}></Route>
                        <Route path={'showEmployeeCon'} element={<ShowEmployeeConsolidationtion></ShowEmployeeConsolidationtion>}></Route>
                        <Route path={'showEmployeeConBlock'} element={<ShowEmployeeConsolidationtionBlock></ShowEmployeeConsolidationtionBlock>}></Route>
                        <Route path={'showEmployeeTranBlock'} element={<ShowEmployeeTransantionBlock></ShowEmployeeTransantionBlock>}></Route>
                        <Route path={'employeeTran'} element={<CreateEmployeeTran></CreateEmployeeTran>}></Route>
                        <Route path='orderStatisticsConsolidationPoint_complete' element={<OrderStatistics_ConsolidationPoint_StatusComplete/>}></Route>
                        <Route path='orderStatisticsConsolidationPoint_cancel' element={<OrderStatistics_ConsolidationPoint_StatusCancel/>}></Route>
                    </Route>
                    <Route path={'employee'} element={<LayOutEmployee/>}>
                        <Route path="" element={<Welcome/>}></Route>
                        <Route path={"orders"} element={<Orders/>}></Route>
                        <Route path={'transactionPoint/orderPending/:id'}
                               element={<OrderPending_TransactionPoint/>}></Route>
                        <Route path={'transactionPoint/orderShipping/:id'}
                               element={<OrderShipping_TransactionPoint/>}></Route>

                        <Route path={'consolidationPoint/orderReceived/:id'}
                               element={<OrderReceived_ConsolidationPoint/>}></Route>
                        <Route path={'consolidationPoint/orderShipping/:id'}
                               element={<OrderShipping_ConsolidationPoint/>}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
