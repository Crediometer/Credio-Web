import logo from '../../images/logo.svg'; 
import './Sidebar.css';
import { SidebarDetails } from './SidebarDetails';
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="logo-con">
                <img src={logo} className="logo" alt='logo'></img>
            </div>
            <div className="links">
                <nav>
                    {SidebarDetails.map((val, key)=>{
                        return(
                            <li 
                                key={key} 
                                id={window.location.pathname == val.link ? 'active' : ''}
                                onClick={()=> {
                                window.location.pathname = val.link
                                }}
                                >
                                <div className="sideicon">
                                    <div className="sideicon-inner">
                                        {val.icon}
                                    </div>
                                </div>
                                <p className="address-name">{val.title}</p>
                            </li>
                        )
                    })}
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;