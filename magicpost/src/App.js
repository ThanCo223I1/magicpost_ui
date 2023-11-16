import './App.css';
import {Route, Routes} from "react-router";
import PlayOut from "./component/PlayOut";
import Home from "./page/home/Home";
import Login from "./component/login/Login";
import Orders from "./page/home/Orders";
import LayoutAdmin from "./component/playout_admin/LayoutAdmin";
import LayOutEmployee from "./page/employee/LayoutEmployee";
import TransantionPointAdmin from "./component/playout_admin/transantionPoint/TransantionPointAdmin";
import LayoutLeader from "./component/leader/LayoutLeader";
import TransantionPointManager from "./component/playout_admin/transantionPoint/TransantionPointManager";
import TransantionPointManagerBlock from "./component/playout_admin/transantionPoint/TransantionPointManagerBlock";
import ConsolidationPointManager from "./component/playout_admin/consolidationPoint/ConsolidationPointManager";
import ConsolidationPointManagerBlock
    from "./component/playout_admin/consolidationPoint/ConsolidationPointManagerBlock";
import OrderPending_TransactionPoint from "./component/transactionPoint/employee/OrderPending_TransactionPoint";
import OrderShipping_TransactionPoint from "./component/transactionPoint/employee/OrderShipping_TransactionPoint";
import OrderReceived_ConsolidationPoint from "./component/consolidationPoint/employee/OrderReceived_ConsolidationPoint";
import OrderShipping_ConsolidationPoint from "./component/consolidationPoint/employee/OrderShipping_ConsolidationPoint";
import Welcome from "./component/Welcome";
import ShowEmployeeTransantionBlock from "./component/leader/Transantion/ShowEmployeeTransantionBlock";
import ShowEmployeeConsolidationtionBlock from "./component/leader/Consolidation/ShowEmployeeConsolidationtionBlock";
import ShowEmployeeConsolidationtion from "./component/leader/Consolidation/ShowEmployeeConsolidationtion";
import ShowEmployeeTransantion from "./component/leader/Transantion/ShowEmployeeTransantion";
import ConsolidationPointAdmin from "./component/playout_admin/consolidationPoint/ConsolidationPointAdmin";
import CreateEmployeeTran from "./component/leader/Transantion/CreateEmployeeTran";
import GoodsIncoming from "./component/playout_admin/consolidationPoint/GoodsIncoming";
import GoodsOutgoing from "./component/playout_admin/consolidationPoint/GoodsOutgoing";
import OrderStatistics_ConsolidationPoint_StatusComplete
    from "./component/leader/Consolidation/OrderStatistics_ConsolidationPoint_StatusComplete";
import OrderStatistics_ConsolidationPoint_StatusCancel
    from "./component/leader/Consolidation/OrderStatistics_ConsolidationPoint_StatusCancel";
import CreateEmployeeCon from "./component/leader/Consolidation/CreateEmployeeCon";
import OrderStatistics_Transaction_Admin
    from "./component/playout_admin/transantionPoint/OrderStatisticsTransactionAdmin";
import OrderStatisticsConsolidationAdmin
    from "./component/playout_admin/consolidationPoint/OrderStatisticsConsolidationAdmin";
import OrderStatisticsTransactionAdmin
    from "./component/playout_admin/transantionPoint/OrderStatisticsTransactionAdmin";
import OrderStatisticsShipped from "./component/playout_admin/statistics-all-points/OrderStatisticsShipped";
import OrderStatisticsInventory from "./component/playout_admin/statistics-all-points/OrderStatisticsInventory";
import OrderStatistics_ConsolidationPoint_StatusShipping
    from "./component/leader/Consolidation/OrderStatistics_ConsolidationPoint_StatusShipping";
import OrderStatistics_TransactionPoint_Shipped
    from "./component/leader/Transantion/OrderStatistics_TransactionPoint_Shipped";
import OrderStatistics_TransactionPoint_Unsent
    from "./component/leader/Transantion/OrderStatistics_TransactionPoint_Unsent";
import OrderStatistics_TransactionPoint_Received
    from "./component/leader/Transantion/OrderStatistics_TransactionPoint_Received";
import OrderStatistics_TransactionPoint_Sent
    from "./component/leader/Transantion/OrderStatistics_TransactionPoint_Sent";
import OrderStatistics_ConsolidationPoint_Received
    from "./component/leader/Consolidation/OrderStatistics_ConsolidationPoint_Received";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<PlayOut/>}>
                    <Route path={''} element={<Home/>}></Route>
                    <Route path={'/login'} element={<Login/>}></Route>
                </Route>
                <Route>
                    <Route path={'admin'} element={<LayoutAdmin/>}>
                        <Route path="" element={<Welcome/>}></Route>
                        <Route path={"tran"} element={<TransantionPointAdmin/>}></Route>
                        <Route path={"managerTran"} element={<TransantionPointManager/>}></Route>
                        <Route path={"managerCon"} element={<ConsolidationPointManager/>}></Route>
                        <Route path={"managerTran/block"} element={<TransantionPointManagerBlock/>}></Route>
                        <Route path={"managerCon/block"} element={<ConsolidationPointManagerBlock/>}></Route>
                        <Route path={"con"} element={<ConsolidationPointAdmin/>}></Route>
                        <Route path={'orderStatistics_TransactionPoint_admin'} element={<OrderStatisticsTransactionAdmin/>}></Route>
                        <Route path={'orderStatistics_Consolidation_admin'} element={<OrderStatisticsConsolidationAdmin/>}></Route>
                        <Route path={'orderStatistics_shipped'} element={<OrderStatisticsShipped/>}></Route>
                        <Route path={'orderStatistics_inventory'} element={<OrderStatisticsInventory/>}></Route>
                    </Route>
                </Route>
                <Route>
                    <Route path={'leader'} element={<LayoutLeader/>}>
                        <Route path="" element={<Welcome/>}></Route>
                        <Route path={'employeeCon'} element={<CreateEmployeeCon></CreateEmployeeCon>}></Route>
                        <Route path={'showEmployeeTran'}
                               element={<ShowEmployeeTransantion></ShowEmployeeTransantion>}></Route>
                        <Route path={'showEmployeeCon'}
                               element={<ShowEmployeeConsolidationtion></ShowEmployeeConsolidationtion>}></Route>
                        <Route path={'showEmployeeConBlock'}
                               element={<ShowEmployeeConsolidationtionBlock></ShowEmployeeConsolidationtionBlock>}></Route>
                        <Route path={'showEmployeeTranBlock'}
                               element={<ShowEmployeeTransantionBlock></ShowEmployeeTransantionBlock>}></Route>
                        <Route path={'employeeTran'} element={<CreateEmployeeTran></CreateEmployeeTran>}></Route>
                        <Route path={'incoming'} element={<GoodsIncoming/>}></Route>
                        <Route path={'outgoing'} element={<GoodsOutgoing/>}></Route>
                        <Route path='orderStatisticsConsolidationPoint_complete'
                               element={<OrderStatistics_ConsolidationPoint_StatusComplete/>}></Route>
                        <Route path='orderStatisticsConsolidationPoint_cancel'
                               element={<OrderStatistics_ConsolidationPoint_StatusCancel/>}></Route>
                        <Route path={'orderStatisticsConsolidationPoint_shipping'} element={<OrderStatistics_ConsolidationPoint_StatusShipping/>}></Route>
                        <Route path={'orderStatisticsConsolidationPoint_received'} element={<OrderStatistics_ConsolidationPoint_Received/>}></Route>
                        <Route path={'orderStatisticsTransactionPoint_shipped'} element={<OrderStatistics_TransactionPoint_Shipped/>}></Route>
                        <Route path={'orderStatisticsTransactionPoint_unsent'} element={<OrderStatistics_TransactionPoint_Unsent/>}></Route>
                        <Route path={'orderStatisticsTransactionPoint_received'} element={<OrderStatistics_TransactionPoint_Received/>}></Route>
                        <Route path={'orderStatisticsTransactionPoint_sent'} element={<OrderStatistics_TransactionPoint_Sent/>}></Route>
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
