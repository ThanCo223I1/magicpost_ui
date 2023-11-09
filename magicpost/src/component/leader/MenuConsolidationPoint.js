import {Link} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from 'react';
import {Dropdown} from "react-bootstrap";


const MenuConsolidationPoint = () => {
    return (
        <>
            <div style={{position: 'fixed', marginTop: '68px'}} className="warpper">
                <div style={{width: "250px"}}>
                    <div style={{padding: 0, color: '#fff', background: 'honeydew', height: '770px'}}>
                        <ul id="" style={{zIndex: '1020'}}>
                            <li className="">
                                <div style={{padding: "30px"}} className="has-arrow" aria-expanded="false">
                                    <div className="nav_icon_small">
                                    </div>
                                    <Link to={"/leader/employeeCon"}>Tạo tài khoản nhân viên</Link>
                                </div>
                            </li>
                            <li>
                                <div>dsfdf</div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MenuConsolidationPoint;