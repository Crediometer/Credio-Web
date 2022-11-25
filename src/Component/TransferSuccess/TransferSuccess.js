import './TransferSuccess.css';
const TransferSuccess = () => {
    return ( 
        <div className="transfersuccess transferform">
            <p className="transfer-to">Details</p>
            <div className="transfersuccess-inner">
            <div className="from-to">
                <div className="from">
                    <p className="trans-head">From:</p>
                    <p className="trans-body">Johnson (agent)</p>
                    <p className="trans-body trans-body-2">**** 6786</p>
                </div>
                <div className="to">
                    <p className="trans-head">To:</p>
                    <p className="trans-body">Crediometer</p>
                    <p className="trans-body trans-body-2">**** 7860</p>
                </div>
            </div>
            <div className="amount-commission">
                <div className="amount">
                    <p className="trans-head">Amount:</p>
                    <p className="trans-body">$120,000</p>
                </div>
                <div className="commission">
                    <p className="trans-head">Commission:</p>
                    <p className="trans-body">$0.00</p>
                </div>
            </div>
            <input
            type="submit"
            value="Print Receipt"
            className="transfer-input transfer-submit"
            ></input>
            </div>
        </div>
    );
}
 
export default TransferSuccess;