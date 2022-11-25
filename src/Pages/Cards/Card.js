import { Link } from 'react-router-dom';
import ActionCard from '../../Component/ActionCard/ActionCard';
import CardDetails from '../../Component/CardDetails/CardDetails';
import './Card.css';
const Cards = () => {
    return ( 
        <div className="card">
            <div className="card-top">
                <p className="card-title">Cards</p>
                <div className="your-balance">
                    <p className="your-balance-text">Your Balance</p>
                    <p className="your-balance-amount">₦ 1.250,69</p>
                </div>
            </div>
            <div className="card-details">
                <p className="card-details-title">Card Details</p>
                <div className="card-details-inner">
                    <CardDetails/>
                    <p className="addanother">+Add another card</p>
                </div>
            </div>
            <div className="card-bottom">
                <p className="card-bottom-header">What are you looking for?</p>
                <div className="card-bottom-action">
                    <div className="account-action">
                        <p className="account-action-text">Account Actions</p>
                        <Link>
                            <ActionCard
                            header="Transfer between accounts"
                            text="Transfering between your accounts"
                            />
                        </Link>
                        <Link to="/bycard">
                            <ActionCard
                            header="By card number"
                            text="Transferimg by card number"
                            />
                        </Link>
                    </div>
                    <div className="account-record">
                        <p className="account-record-text">Account Records</p>
                        <Link>
                            <ActionCard
                            header="Operation History"
                            text="View all the transactions on this card"
                            />
                        </Link>
                        <Link>
                            <ActionCard
                            header="Receipts"
                            text="Saved receipts from previous payments"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;