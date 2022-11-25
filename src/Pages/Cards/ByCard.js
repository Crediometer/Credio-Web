import CardDetails from "../../Component/CardDetails/CardDetails";
import TransferForm from "../../Component/TransferForm/TransferForm";
import './ByCard.css';
const ByCard = () => {
    return ( 
        <div className="bycard">
            <p className="bycard-header">Transfering by card number</p>
            <div className="bycard-top">
                <p className="card-details-title">Your Card Details</p>
                <CardDetails/>
            </div>
            <div className="bycard-bottom">
                <TransferForm/>
            </div>
        </div>
     );
}
 
export default ByCard;