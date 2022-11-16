import {FiChevronRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';
const PeopleCard = (props) => {
    return ( 
        <div className="message">
            <div className="message-left">
                <img src={props.image} className='message-image'></img>
                <div className="message-overview">
                    <p className="sender-name">{props.name}</p>
                    <p className="transaction-time">{props.phone}</p>
                </div>
            </div>
            <div className="message-right-2">
                <p className='transaction-amount'>Transfer</p>
                <Link to="/chat"><p className='transaction-icon'><FiChevronRight/></p></Link>
            </div>
        </div>
     );
}
 
export default PeopleCard;