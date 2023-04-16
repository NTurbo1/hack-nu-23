import { Outlet, Link } from "react-router-dom";
import eCourierPhoto from '../images/eCourierPhoto.png';

function AdminPage() {

    return (
        <div id="admin-page">
            <div className="side-bar">
                <div className="side-bar-links-box">
                    <ul className="side-bar-links">
                        <li className="side-bar-link">
                            <Link to = "/services">Services</Link>
                        </li>

                        <li className="side-bar-link">
                            <Link to = "/couriers">Couriers</Link>
                        </li>

                        <li className="side-bar-link">
                            <Link to = "/operators">Operators</Link>
                        </li>
                    </ul>
                </div>

                <img className="e-Courier-photo" src={eCourierPhoto} alt="e-courier icon"/>
            </div>
            <Outlet />
        </div>
    )
}

export {
    AdminPage
}