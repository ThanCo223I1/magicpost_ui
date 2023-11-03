import './App.css';
import {Route, Routes} from "react-router";
import PlayOut from "./component/PlayOut";
import Home from "./page/home/Home";
import Login from "./component/login/Login";
import Register from "./component/login/Register";
import Order from "./page/home/Order";
import LayoutAdmin from "./component/playout_admin/LayoutAdmin";
import TransantionPointAdmin from "./component/playout_admin/TransantionPointAdmin";
import ConsolidationPoint from "./component/playout_admin/ConsolidationPoint";
import LayoutLeader from "./component/leader/LayoutLeader";
import CreateEmployeeCon from "./component/leader/CreateEmployeeCon";
import CreateEmployeeTran from "./component/leader/CreateEmployeeTran";


function App() {
    const account = JSON.parse(localStorage.getItem("account"))

    return (
        <>
            <Routes>
                <Route path={'/'} element={<PlayOut/>}>
                    <Route path={''} element={<Home/>}></Route>
                    <Route path={'/login'} element={<Login/>}></Route>
                    <Route path={"/register"} element={<Register/>}></Route>
                </Route>
                {account && <Route>
                    <Route path={"order"} element={<Order/>}></Route>
                    <Route path={'admin'} element={<LayoutAdmin/>}>
                        <Route path={"tran"} element={<TransantionPointAdmin/>}></Route>
                        <Route path={"con"} element={<ConsolidationPoint/>}></Route>
                    </Route>
                </Route>}
                {account && <Route>
                    <Route path={'leader'} element={<LayoutLeader/>}>
                        <Route path={'employeeCon'} element={<CreateEmployeeCon></CreateEmployeeCon>}></Route>
                        <Route path={'employeeTran'} element={<CreateEmployeeTran></CreateEmployeeTran>}></Route>
                    </Route>
                    <Route path={'employee'} element={<Order></Order>}></Route>
                </Route>}
            </Routes>
        </>
    );
}

export default App;
