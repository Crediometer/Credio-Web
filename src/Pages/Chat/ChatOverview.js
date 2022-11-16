import SearchBar from "../../Component/Searchbar/SearchBar";
import "./ChatOverview.css";
import Message from "../../Component/Message/Message";
import { Link } from "react-router-dom";
const ChatOverview = () => {
    return ( 
        <div className="chatoverview">
            <p className="chatoverview-header">Operation History</p>
            <div className="chatoverview-body">
                <SearchBar/>
                <div className="chatoverview-list">
                    <p className="chatoverview-date">TODAY | 19 NOV,2021</p>
                    <Link to='/people'>
                        <Message
                            image="https://source.unsplash.com/random/?person"
                            name = "Lee Alexander"
                            message = "₦ 267.0 Incoming transaction"
                        />
                    </Link>
                    <Message
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        message = "₦ 267.0 Incoming transaction"
                    />
                    <Message
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        message = "₦ 267.0 Incoming transaction"
                    />
                    <p className="chatoverview-date">TODAY | 19 NOV,2021</p>
                    <Message
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        message = "₦ 267.0 Incoming transaction"
                    />
                    <Message
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        message = "₦ 267.0 Incoming transaction"
                    />
                    <Message
                        image="https://source.unsplash.com/random/?person"
                        name = "Lee Alexander"
                        message = "₦ 267.0 Incoming transaction"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default ChatOverview;