import React from "react";
import HeaderEmployee from "./HeaderEmployee";
import FooterEmployee from "./FooterEmployee";
import {Outlet} from "react-router";

function LayoutEmployee(){
    return(
        <>
            <HeaderEmployee></HeaderEmployee>
            <div style={{position: 'fixed', marginTop: '68px'}} className="warpper">
                <div style={{width: "240px"}}>
                    <div style={{padding: 0, color: '#fff', background: 'honeydew', height: '770px'}}>
                        <ul id="" style={{zIndex: '1020'}}>
                            <li className="">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>

                                </div>
                            </li>
                            <li className="mm-active">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>

                                </div>


                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <div style={{marginLeft: "250px"}}>
                <Outlet></Outlet>
            </div>
            <FooterEmployee></FooterEmployee>
        </>
    )
}
export default LayoutEmployee;