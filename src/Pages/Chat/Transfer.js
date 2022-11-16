import TransferCard from "../../Component/TransferCard/TransferCard";
import './Transfer.css'
const Transfer = () => {
    return ( 
        <div className="transfer">
            <p className="transfer-header">Transfering between accounts</p>
            <div className="transfer-body">
                <TransferCard/>
            </div>
        </div>
     );
}
 
export default Transfer;