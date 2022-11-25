import CardDetails from "../../Component/CardDetails/CardDetails";
import TransferSuccess from "../../Component/TransferSuccess/TransferSuccess";
const ByCardSuccess = () => {
    return ( 
        <div className="bycardsuccess bycard">
            <p className="bycard-header">Transfering by card number</p>
            <div className="bycard-top">
                <p className="card-details-title">Your Card Details</p>
                <CardDetails/>
            </div>
            <div className="bycard-bottom">
                <p className="bycard-header">Payment Successful</p>
                <TransferSuccess/>
            </div>
        </div>
     );
}
 
export default ByCardSuccess;