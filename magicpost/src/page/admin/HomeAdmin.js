import SidebarAdmin from "./SidebarAdmin";
import {Outlet} from "react-router";

function HomeAdmin(){
    return(
        <>
            <link rel="stylesheet" href="/template_admin/css/css_sidebar.css"/>
            <link rel="stylesheet" href="/template_admin/vendors/themefy_icon/themify-icons.css"/>
            <div className="wrapper" >
                <div className="home-flex">
                    <div className="home-flex-content">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeAdmin;