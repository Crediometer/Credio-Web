const TransactionCard = (props) => {
    return ( 
        <div className="message">
            <div className="message-left">
                <img src={props.image} className='message-image'></img>
                <div className="message-overview">
                    <p className="transaction-name">Transfer to <span>{props.name} </span></p>
                    <p className="transaction-time">{props.time}</p>
                </div>
            </div>
            <div className="message-right">
                <p className='transaction-amount'>{props.amount}</p>
                <p className='transaction-details'>{props.detail}</p>
            </div>
        </div>
     );
}
 
export default TransactionCard;