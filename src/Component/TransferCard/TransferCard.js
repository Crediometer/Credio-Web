import {FiChevronLeft} from 'react-icons/fi';
import './TransferCard.css';
const TransferCard = () => {
    return ( 
        <div className="transfercard">
            <div className="chat-body-header">
                <div className="chat-back"><FiChevronLeft/></div>
                <div className="chat-image"><img src="https://source.unsplash.com/random/?person"></img></div>
                <div className="chat-details">
                    <p className="chat-name">Lee Alexander</p>
                    <p className="chat-phone">+234-8936523456</p>
                </div>
            </div>
            <div className="amount-input">
                <p>₦</p>
                <input
                type="number"
                placeholder="0"
                ></input><br></br>
                <input
                type='submit'
                value="Add a note"
                >
                </input>
            </div>
        </div>
     );
}
 
export default TransferCard;