import {FaSearch} from 'react-icons/fa';
import {SlBell} from 'react-icons/sl';
import {BiHelpCircle} from 'react-icons/bi';
import {FaChevronDown} from 'react-icons/fa';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className = "searchbar-container">
                <div className="searchbar">
                    <div className="searchicon">
                        <FaSearch/>
                    </div>
                    <div>
                        <form>
                            <input 
                                type ="text"
                                className="search"
                                placeholder = "Search"
                            />
                        </form> 
                    </div>     
                </div>
            </div> 
            <div className="notificationSide">
                <div className="navbar-button">
                    <button>Setup Guide</button>
                </div>
                <div className="bell">
                    <div className="bellicon">
                        <SlBell/>
                    </div>
                    <div className="bellnumber">
                        <p>1</p>
                    </div>
                </div>
                <div className="help">
                   <BiHelpCircle/>
                </div>
                <div className="dropbox">
                    <p>Micheal</p>
                    <div className="dropicon">
                        <FaChevronDown/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;