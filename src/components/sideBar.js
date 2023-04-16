import { Outlet, Link } from "react-router-dom";

function SideBar({setcCouriersRendered}) {

    function showCouriers() {
        setcCouriersRendered(true)
    }

    return (
        <div id="side-bar">
            <ul>
                <li id="couriers-link" onClick={showCouriers}>
                    Couriers
                </li>
            </ul>

            <Outlet />
        </div>
    )
}

export {
    SideBar
}